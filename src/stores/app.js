import { reactive } from 'vue'
import { defineStore } from 'pinia';

const MOBILE_SIZE = 1024;

export const useAppStore = defineStore('app', () => {
  const stateData = reactive({
    inMobile: window.innerWidth <= MOBILE_SIZE,
    windowWidth: window.innerWidth
  });

  /**
   * Check if current window width is from mobile
   */
  const inMobileCheck = () => {
    if (stateData.windowWidth <= MOBILE_SIZE && !stateData.inMobile) {
      stateData.inMobile = true;
    } else if (stateData.windowWidth > MOBILE_SIZE && stateData.inMobile) {
      stateData.inMobile = false;
    }
  };

  /**
   * Add a window resize event monitor and
   * check if window width is from mobile
   */
  const windowResizeAddEvent = () => {
    window.addEventListener('resize', () => {
      stateData.windowWidth = window.innerWidth;
      inMobileCheck();
    });
  };

  /**
   * Update page title
   * @param {String} title 
   */
  const updatePageTitle = (title) => {
    document.title = title + ' - Vue App';
  };

  return {
    stateData,

    inMobileCheck,
    windowResizeAddEvent,
    updatePageTitle
  }
});
