import { computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useAlertStore = defineStore('alert', () => {
  const stateData = reactive({})

  /**
   * Add a alert data
   * @param {*} text 
   * @param {*} title 
   * @param {*} color 
   * @param {*} duration 
   * @param {*} flash 
   */
  const add = (text, title = null, color, duration = null, flash = false) => {
    const data = {
      text: text,
      title: title,
      color: color,
      duration: duration
    };

    if (flash) {
      // add alert on storage
      localStorage.setItem('app_flash_alert', JSON.stringify(data))
    } else {
      stateData.showed = false
      stateData.id = Date.now()
      stateData.text = data.text
      stateData.title = data.title
      stateData.color = data.color
      stateData.duration = data.duration
    }
  }

  /**
   * Get alert
   * @returns 
   */
  const get = () => {
    stateData.showed = true;
    return stateData;
  }

  /**
   * Get a flash alert
   * @returns 
   */
  const getFlash = () => {
    const alert = localStorage.getItem('app_flash_alert')
    localStorage.removeItem('app_flash_alert')
    return alert ? JSON.parse(alert) : null;
  }

  /**
   * Clear alert if showed
   * @returns 
   */
  const clear = () => {
    if (!stateData.showed) {
      return;
    }

    stateData.id = null;
    stateData.text = null;
    stateData.title = null;
    stateData.flash = false;
    stateData.duration = null;
  }

  /**
   * Check if has new alert(with new id)
   */
  const hasNewAlert = computed(() => {
    return !stateData?.flash && stateData?.id
  })

  // Watch for route change to get flash alert from storage
  watch(router.currentRoute, () => {
    // Get alert from storage
    const aD = getFlash()

    if (!aD) {
      return;
    }

    add(aD.text, aD.title, aD.color, aD.duration, false)
  }, { immediate: true, deep: true })

  return {
    stateData,
    add,
    get,
    getFlash,
    clear,
    hasNewAlert
  }
})
