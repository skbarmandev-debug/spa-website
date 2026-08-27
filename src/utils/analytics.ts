/**
 * GA4 & Google Tag Manager tracking utility
 * Emits custom events to window.dataLayer and triggers user feedback
 */

export interface TrackingEventData {
  ctaName: string;
  ctaCategory: 'booking' | 'call' | 'contact_form' | 'navigation' | 'special_offer';
  location: string;
  targetUrl?: string;
  serviceInterest?: string;
}

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function trackCtaClick(trackingId: string, eventData: TrackingEventData) {
  // Push into Google Tag Manager / GA4 dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
      tracking_id: trackingId,
      cta_name: eventData.ctaName,
      cta_category: eventData.ctaCategory,
      page_location: window.location.pathname,
      section_origin: eventData.location,
      service_interest: eventData.serviceInterest || 'general',
      timestamp: new Date().toISOString()
    });

    console.log(`[GTM / GA4 Tracked]: ${trackingId}`, eventData);
  }
}
