// Google Tag Manager loader — injected only after the visitor consents.
// Container: GA4 (G-8207MYYT5F) + Google Ads (AW-11492232765) + conversion tags.
export const GTM_ID = 'GTM-NWWXG6DV';

// Idempotent: safe to call more than once (returning visitor + Accept click).
export function loadGTM(id = GTM_ID) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const firstScript = document.getElementsByTagName('script')[0];
  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  firstScript.parentNode.insertBefore(gtmScript, firstScript);
}
