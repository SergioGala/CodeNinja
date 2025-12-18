// app/lib/analytics.js
// Tracking FULL GTM vía dataLayer

const pushToDataLayer = (payload) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

export const trackEvent = (eventName, eventParams = {}) => {
  pushToDataLayer({
    event: eventName,
    ...eventParams,
  });
};

// =============================
// EVENTS QUE USA GTM
// =============================

// Lead (submit real)

export const trackLeadFormSubmit = (formData) => {
  const projectType = formData?.projectType || 'otro';
  const value = Number(getProjectValue(projectType)) || 0;

  trackEvent('lead_form_submit', {
    email: formData?.email || '',
    project_type: projectType,
    value,                 // viene del helper
    currency: 'EUR',
    transaction_id: generateTransactionId(),
  });
};

// CTA click
export const trackCTAClick = (ctaLocation) => {
  trackEvent('cta_click', {
    location: ctaLocation || '',
  });
};

// Scroll 50%
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

// Time on site (ej: 15, 30, 45... segundos)
export const trackTimeOnSite = (seconds) => {
  trackEvent('time_on_site', {
    time_seconds: Number(seconds) || 0,
  });
};

// =============================
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

export const getProjectValue = (projectType) => {
  const projectValues = {
    'web': 1500, // Landing/web básica Promedio real: €999-1,999
    'ecommerce': 3500, // Tienda online básica Promedio real: €2,499-4,999
    'app': 4000, // MVP app móvil Promedio real:  real: €2,999-5,999
    'backend': 1200, // Backend/API más económico promedio real: €799-1,999
    'otro': 2000, // Otros proyectos promedio: Promedio general
  };

 // Devolver valor según tipo, o 2000 por defecto

  return projectValues[projectType] || 2000;
}

const generateTransactionId = () => {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
};

// DEBUG (solo dev)
export const debugTracking = (eventName, data) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('📊 Tracking Event:', eventName, data);
  }
};
