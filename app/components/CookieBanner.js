'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * CookieBanner con Google Consent Mode v2
 * 
 * Este componente:
 * 1. Muestra un banner de cookies compatible con GDPR
 * 2. Integra Google Consent Mode v2 (ad_storage, ad_user_data, ad_personalization, analytics_storage)
 * 3. Guarda las preferencias del usuario en localStorage
 * 4. Comunica el consentimiento a GTM via dataLayer
 */

const CONSENT_COOKIE_NAME = 'cookie_consent_jegs'

// Configuración por defecto (denied para Europa - GDPR)
const DEFAULT_CONSENT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted', // Necesarias para el funcionamiento
  security_storage: 'granted',
}

// Configuración cuando el usuario acepta todo
const GRANTED_CONSENT = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  security_storage: 'granted',
}

// Configuración cuando solo acepta necesarias
const NECESSARY_ONLY_CONSENT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Inicializar consent mode con valores por defecto ANTES de cargar GTM
    initializeConsentMode()
    
    // Comprobar si ya hay consentimiento guardado
    const savedConsent = localStorage.getItem(CONSENT_COOKIE_NAME)
    
    if (savedConsent) {
      // Usuario ya dio consentimiento, actualizar estado
      const parsed = JSON.parse(savedConsent)
      updateConsentState(parsed)
      setConsent({
        analytics: parsed.analytics_storage === 'granted',
        marketing: parsed.ad_storage === 'granted',
      })
    } else {
      // No hay consentimiento, mostrar banner
      setShowBanner(true)
    }
  }, [])

  // Inicializar Google Consent Mode con valores por defecto (denied)
  const initializeConsentMode = () => {
    window.dataLayer = window.dataLayer || []
    
    function gtag() {
      window.dataLayer.push(arguments)
    }
    
    // Establecer valores por defecto - CRÍTICO: debe ejecutarse ANTES de GTM
    gtag('consent', 'default', {
      ...DEFAULT_CONSENT,
      wait_for_update: 500, // Esperar 500ms para que el usuario responda
    })
    
    // Para debug en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('🍪 Consent Mode initialized with defaults:', DEFAULT_CONSENT)
    }
  }

  // Actualizar el estado de consentimiento en GTM
  const updateConsentState = (consentConfig) => {
    window.dataLayer = window.dataLayer || []
    
    function gtag() {
      window.dataLayer.push(arguments)
    }
    
    gtag('consent', 'update', consentConfig)
    
    // Guardar en localStorage
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consentConfig))
    
    // Para debug en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('🍪 Consent Mode updated:', consentConfig)
    }
  }

  // Usuario acepta todas las cookies
  const acceptAll = () => {
    updateConsentState(GRANTED_CONSENT)
    setConsent({ analytics: true, marketing: true })
    setShowBanner(false)
    setShowPreferences(false)
  }

  // Usuario rechaza todas (solo necesarias)
  const rejectAll = () => {
    updateConsentState(NECESSARY_ONLY_CONSENT)
    setConsent({ analytics: false, marketing: false })
    setShowBanner(false)
    setShowPreferences(false)
  }

  // Usuario guarda preferencias personalizadas
  const savePreferences = () => {
    const customConsent = {
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
    }
    
    updateConsentState(customConsent)
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={() => {}} // No cerrar al hacer click fuera
      />
      
      {/* Banner principal */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f0f1a] border border-cyan-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-cyan-500/10">
            
            {!showPreferences ? (
              // Vista principal del banner
              <>
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🍪</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      Usamos cookies
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Utilizamos cookies propias y de terceros para analizar el tráfico, 
                      personalizar contenido y mostrarte publicidad relevante. 
                      Puedes aceptar todas, rechazarlas o configurar tus preferencias.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    Aceptar todas
                  </button>
                  
                  <button
                    onClick={rejectAll}
                    className="flex-1 px-6 py-3 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    Solo necesarias
                  </button>
                  
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 px-6 py-3 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  >
                    Configurar
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <Link 
                    href="/cookies" 
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    Política de Cookies
                  </Link>
                  <span className="text-gray-600 mx-2">•</span>
                  <Link 
                    href="/privacidad" 
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    Política de Privacidad
                  </Link>
                </div>
              </>
            ) : (
              // Vista de preferencias detalladas
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    Configurar cookies
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Cookies necesarias - siempre activas */}
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-cyan-500/10">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cookies necesarias</h4>
                      <p className="text-sm text-gray-400">
                        Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-cyan-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Cookies analíticas */}
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-cyan-500/10">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cookies analíticas</h4>
                      <p className="text-sm text-gray-400">
                        Nos ayudan a entender cómo usas el sitio (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        consent.analytics ? 'bg-cyan-500 justify-end' : 'bg-gray-600 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>

                  {/* Cookies de marketing */}
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-cyan-500/10">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cookies de marketing</h4>
                      <p className="text-sm text-gray-400">
                        Permiten mostrarte anuncios relevantes (Google Ads, Meta Pixel).
                      </p>
                    </div>
                    <button
                      onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        consent.marketing ? 'bg-cyan-500 justify-end' : 'bg-gray-600 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    Guardar preferencias
                  </button>
                  
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  >
                    Aceptar todas
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}