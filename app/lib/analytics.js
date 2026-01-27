// Utilidades para tracking de eventos en GA4 y Meta Pixel

const pushToDataLayer = (payload) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

// ============================================
// GOOGLE ANALYTICS 4 EVENTS
// ============================================

// export const trackEvent = (eventName, eventParams = {}) => {
//   if (typeof window !== 'undefined' && window.gtag) {
//     window.gtag('event', eventName, eventParams);            // VERSION SERGIO EN EV
//   }
// };

export const trackEvent = (eventName, eventParams = {}) => {
  pushToDataLayer({
    event: eventName,         //GIOVANNY VERSION EN EV
    ...eventParams,
  });
};

// =============================
// EVENTS QUE USA GTM
// =============================

// Lead (submit real)

// Evento: Envío de formulario
// export const trackFormSubmit = (formData) => {
//   trackEvent('form_submit', {
//     project_type: formData.projectType,      //COMENTADA EN EVALUACION VERSION S
//     budget: formData.budget,
//     value: getBudgetValue(formData.budget),
//     currency: 'EUR',
//   });
// };

export const trackLeadFormSubmit = (formData) => {
  const projectType = formData?.projectType || 'otro';
  const value = Number(getProjectValue(projectType)) || 0;

  trackEvent('lead_form_submit', {
    email: formData?.email || '',
    project_type: projectType,                                 //GIOVANNY V
    value,                 // viene del helper
    currency: 'EUR',
    transaction_id: generateTransactionId(),
  });
};

// Evento: Click en CTA ENVENTO NO HA SUFRIDO CAMBIOS SE DEJA LA MISMA VERSION solo || ''
export const trackCTAClick = (ctaLocation) => {
  trackEvent('cta_click', {
    location: ctaLocation || '',
  });
};

// Evento: Scroll 50% (con dedupe)

export const trackScroll50 = () => {
  // dedupe: dispara 1 vez por sesión
  if (typeof window !== 'undefined') {
    if (window.__tracked_scroll_50) return;
    window.__tracked_scroll_50 = true;
  }

  trackEvent('scroll_50_percent', {
    scroll_threshold: 50,
  });
};

// Evento: Tiempo en sitio
export const trackTimeOnSite = (seconds) => {
  trackEvent('time_on_site', {
    time_seconds: Number(seconds) || 0,
  });
};

// ============================================
// META PIXEL (Facebook/Instagram Ads) YA LO HACE TAG MANAGER COMENTADO DE MOMENTO EN EV
// ============================================

// export const trackMetaLead = (formData) => {
//   if (typeof window !== 'undefined' && window.fbq) {
//     window.fbq('track', 'Lead', {
//       content_name: 'Contact Form',
//       content_category: formData.projectType,
//       value: getBudgetValue(formData.budget),
//       currency: 'EUR',
//     });
//   }
// };

// export const trackMetaPageView = () => {
//   if (typeof window !== 'undefined' && window.fbq) {
//     window.fbq('track', 'PageView');
//   }
// };

// ============================================
// // GOOGLE ADS CONVERSION TRACKING (CLICK EVENT) YA LO HACE TAG MANAGER COMENTADO DE MOMENTO EN EV
// ============================================

// export const trackGoogleAdsConversion = (formData, url) => {
//   if (typeof window !== 'undefined' && window.gtag) {
//     const callback = function () {
//       if (typeof(url) !== 'undefined') {
//         window.location = url;
//       }
//     };
    
//     window.gtag('event', 'conversion', {
//       'send_to': 'AW-1776522089/3iiYCJjO48obEOm53pc3',
//       'value': getBudgetValue(formData.budget),
//       'currency': 'EUR',
//       'transaction_id': generateTransactionId(),
//       'event_callback': callback
//     });
//   }
//   return false;
// };

// ============================================
// HELPERS
// ============================================

// Convertir rango de presupuesto a valor numérico
// Valores promedio por tipo de proyecto (Enero-Marzo 2025)
//Nuevos valores estrategia agresiva sin harcoded
export const getProjectValue = (projectType) => {
  const projectValues = {
    'web': 1200,       // Básica €599 / Popular €999 / E-commerce €1,999
    'ecommerce': 1999, // Tienda online (precio único) promedio entre 1999-2999
    'app': 3300,       // Básica €1,999 / Popular €2,999 / Avanzada €5,000
    'backend': 1100,   // Básica €400 / Popular €799 / Avanzada €1,999
    'otro': 1900,      // Promedio general otros proyectos
  };

  return projectValues[projectType] || 1900;
};

// Generar ID único para transacción
const generateTransactionId = () => {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
};

// ============================================
// DEBUGGING (solo desarrollo)
// ============================================

export const debugTracking = (eventName, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Tracking Event:', eventName, data);
  }
};

//NOTAS IMPORTANTES
// ### **SE HA ELIMINADO VS**
// ```
// trackMetaLead() - GTM lo maneja
// trackMetaPageView() - GTM lo maneja
// trackGoogleAdsConversion() - GTM lo maneja
// getBudgetValue() - Hardcodeado y obsoleto
// trackScroll50() simple - Sin dedupe
// trackTimeOnSite() sin validación
// ```

// ---

// ### **ACTUALIZAR valores:**
// ```
// ANTES (precios altos):
// web: 1500
// ecommerce: 3500
// app: 4000
// backend: 1200

// AHORA (estrategia agresiva Ene-Mar):
// web: 1200       ↓ -€300
// ecommerce: 1999 ↓ -€1,501
// app: 3300       ↓ -€700
// backend: 1100   ↓ -€100