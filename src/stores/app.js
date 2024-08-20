import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const MOBILE_SIZE = 1024

export const useAppStore = defineStore('app', () => {
  const stateData = reactive({
    appName: import.meta.env.VITE_APP_NAME,
    inMobile: window.innerWidth <= MOBILE_SIZE,
    windowWidth: window.innerWidth,
    theme: 'light',
    loading: false,
    requesting: false
  })

  /**
   * Check if current window width is from mobile
   */
  const inMobileCheck = () => {
    if (stateData.windowWidth <= MOBILE_SIZE && !stateData.inMobile) {
      stateData.inMobile = true
    } else if (stateData.windowWidth > MOBILE_SIZE && stateData.inMobile) {
      stateData.inMobile = false
    }
  }

  /**
   * Add a window resize event monitor and
   * check if window width is from mobile
   */
  const windowResizeAddEvent = () => {
    window.addEventListener('resize', () => {
      stateData.windowWidth = window.innerWidth
      inMobileCheck()
    })
  }

  /**
   * Update page title
   * @param {String} title 
   */
  const updatePageTitle = (title) => {
    document.title = title + ' - ' + stateData.appName
  }

  /**
   * Dark mode toggle
   */
  const darkModeToggle = () => {
    let theme = localStorage.getItem('app_theme')

    if (theme == 'light') {
      theme = 'dark'
    } else {
      theme = 'light'
    }

    setTheme(theme)
  }

  /**
   * Set theme
   * @param {String} theme 
   */
  const setTheme = (theme = null) => {
    theme = theme ? theme : localStorage.getItem('app_theme')

    localStorage.setItem('app_theme', theme)
    document.documentElement.setAttribute('data-mode', theme)

    stateData.theme = theme
  }

  /**
   * Is dark
   * @returns Boolean
   */
  const isDarkTheme = computed(() => {
    return stateData.theme == 'dark'
  })

  return {
    stateData,

    inMobileCheck,
    windowResizeAddEvent,
    updatePageTitle,
    darkModeToggle,
    setTheme,
    isDarkTheme
  }
})
