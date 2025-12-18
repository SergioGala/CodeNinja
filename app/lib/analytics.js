// app/lib/analytics.js
// Utilidades para tracking de eventos en GA4 y Meta Pixel

// ============================================
// GOOGLE ANALYTICS 4 EVENTS
// ============================================

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// ============================================
// EVENTO: Envío de formulario (MODIFICADO)
// ============================================

export const trackFormSubmit = (formData) => {

  const estimatedValue = getProjectValue(formData.projectType);

  trackEvent('form_submit', {
    project_type: formData.projectType,
    budget: formData.budget,
    // value: getBudgetValue(formData.budget), comentado en fase de observacion
    value: estimatedValue,
    currency: 'EUR',
  });

    // Log para debugging

  console.log(' GA4 Conversión trackeada:', {
    event: 'form_submit',
    project_type: formData.projectType,
    value: estimatedValue
  });
};

// Evento: Click en CTA
export const trackCTAClick = (ctaLocation) => {
  trackEvent('cta_click', {
    location: ctaLocation,
  });
};

// Evento: Scroll 50%
export const trackScroll50 = () => {
  trackEvent('scroll_50_percent', {
    engagement_time_msec: Date.now(),
  });
};

// Evento: Tiempo en sitio
export const trackTimeOnSite = (seconds) => {
  trackEvent('time_on_site', {
    time_seconds: seconds,
  });
};

// ============================================
// META PIXEL (Facebook/Instagram Ads) - MODIFICADO
// ============================================

export const trackMetaLead = (formData) => {
  if (typeof window !== 'undefined' && window.fbq) {

    const value = getProjectValue(formData.projectType);

    window.fbq('track', 'Lead', {
      content_name: 'Contact Form',
      content_category: formData.projectType,
      // value: getBudgetValue(formData.budget),
      value: value,
      currency: 'EUR',
    });
      
    console.log('Meta Pixel Lead trackeado:', {
      content_category: formData.projectType,
      value: value
    });
  }
};

export const trackMetaPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// ============================================
// GOOGLE ADS CONVERSION TRACKING - MODIFICADO
// ============================================

export const trackGoogleAdsConversion = (formData, url) => {
  if (typeof window !== 'undefined' && window.gtag) {

    const value = getProjectValue(formData.projectType);
    const transactionId = generateTransactionId();
    const callback = function () {
      if (typeof(url) !== 'undefined') {
        window.location = url;
      }
    };

        // Conversion ID cuenta Google Ads

    window.gtag('event', 'conversion', {
      'send_to': 'AW-1776522089/3iiYCJjO48obEOm53pc3',
      'value': value,
      'currency': 'EUR',
      'transaction_id': transactionId,
      'event_callback': callback
    });
      console.log(' Google Ads Conversión trackeada:', {
      value: value,
      transaction_id: transactionId,
      project_type: formData.projectType
    });
  }
  return false;
};

// ============================================
// HELPERS
// ============================================

// Convertir rango de presupuesto a valor numérico

// const getBudgetValue = (budget) => {
//   const budgetMap = {
//     '<3000': 2000,
//     '3000-6000': 4500,
//     '6000-12000': 9000,
//     '>12000': 15000,
//   };
//   return budgetMap[budget] || 0;
// };

const getProjectValue = (projectType) => {
  const projectValues = {
    'web': 1500, // Landing/web básica Promedio real: €999-1,999
    'ecommerce': 3500, // Tienda online básica Promedio real: €2,499-4,999
    'app': 4000, // MVP app móvil Promedio real:  real: €2,999-5,999
    'backend': 1200, // Backend/API más económico promedio real: €799-1,999
    'otro': 2000, // Otros proyectos promedio: Promedio general
  };

 // Devolver valor según tipo, o 2000 por defecto

  return projectValues[projectType] || 2000;
};

// Generar ID único para transacción

const generateTransactionId = () => {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// ============================================
// DEBUGGING (solo desarrollo)
// ============================================

export const debugTracking = (eventName, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Tracking Event:', eventName, data);
  }
};