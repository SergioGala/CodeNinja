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

// Evento: Envío de formulario
export const trackFormSubmit = (formData) => {
  trackEvent('form_submit', {
    project_type: formData.projectType,
    budget: formData.budget,
    value: getBudgetValue(formData.budget),
    currency: 'EUR',
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
// META PIXEL (Facebook/Instagram Ads)
// ============================================

export const trackMetaLead = (formData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Contact Form',
      content_category: formData.projectType,
      value: getBudgetValue(formData.budget),
      currency: 'EUR',
    });
  }
};

export const trackMetaPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// ============================================
// GOOGLE ADS CONVERSION TRACKING (CLICK EVENT)
// ============================================

export const trackGoogleAdsConversion = (formData, url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const callback = function () {
      if (typeof(url) !== 'undefined') {
        window.location = url;
      }
    };
    
    window.gtag('event', 'conversion', {
      'send_to': 'AW-1776522089/3iiYCJjO48obEOm53pc3',
      'value': getBudgetValue(formData.budget),
      'currency': 'EUR',
      'transaction_id': generateTransactionId(),
      'event_callback': callback
    });
  }
  return false;
};

// ============================================
// HELPERS
// ============================================

// Convertir rango de presupuesto a valor numérico
const getBudgetValue = (budget) => {
  const budgetMap = {
    '<3000': 2000,
    '3000-6000': 4500,
    '6000-12000': 9000,
    '>12000': 15000,
  };
  return budgetMap[budget] || 0;
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