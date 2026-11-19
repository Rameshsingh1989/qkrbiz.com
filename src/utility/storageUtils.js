import { CONSTANTS } from './constants';

export const StorageUtils = {

  getStoredLandingPage: () => {
    try {
      const stored = localStorage.getItem("landingPage");
      if (!stored) return '';
      
      const parsed = JSON.parse(stored);
      const now = new Date().getTime();
      const age = now - parsed.timestamp;
      
      return (parsed.url && age <= CONSTANTS.LANDING_PAGE_EXPIRY) ? parsed.url : '';
    } catch (error) {
      console.warn('Error parsing landing page from localStorage:', error);
      return '';
    }
  },

  setLandingPage: (url) => {
    try {
      const data = {
        url,
        timestamp: new Date().getTime()
      };
      localStorage.setItem("landingPage", JSON.stringify(data));
    } catch (error) {
      console.warn('Error saving landing page to localStorage:', error);
    }
  },

  clearLandingPage: () => {
    try {
      localStorage.removeItem("landingPage");
    } catch (error) {
      console.warn('Error clearing landing page from localStorage:', error);
    }
  }

};
