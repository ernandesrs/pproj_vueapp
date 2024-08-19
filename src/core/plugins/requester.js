/**
 * 
 * Importing 'axios' and configuring
 * 
 */

import axiosJs from "axios"
import cookies from "./cookies"

const authToken = cookies.get('auth_token')

const customInstance = axiosJs.create({
    baseURL: import.meta.env.VITE_APP_API_BASE,
    headers: {
        Accept: 'application/json'
    }
})

if (authToken) {
    customInstance.defaults.headers.common['Authorization'] = authToken
}

/**
 * 
 * Custom axios instance
 * 
 */
export const apiRequester = customInstance

/**
 * 
 * Default axios
 * 
 */
export const axios = axiosJs