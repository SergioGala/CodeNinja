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
  trackEvent('lead_form_submit', {
    project_type: formData?.projectType || '',
    budget: formData?.budget || '',
    value: getBudgetValue(formData?.budget),
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
// =============================
const getBudgetValue = (budget) => {
  const budgetMap = {
    '<3000': 2000,
    '3000-6000': 4500,
    '6000-12000': 9000,
    '>12000': 15000,
  };
  return budgetMap[budget] || 0;
};

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
