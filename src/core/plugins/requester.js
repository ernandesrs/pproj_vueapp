/**
 * 
 * Importing 'axios' and configuring
 * 
 */

import axiosJs from "axios"
import cookies from "./cookies"
import { useAlertStore } from "@/stores/alert"
import { useAppStore } from "@/stores/app"
import { getServerMessage } from "./../server-messages"

const authToken = cookies.get('auth_token')

const customInstance = axiosJs.create({
    baseURL: import.meta.env.VITE_APP_API_BASE,
    headers: {
        Accept: 'application/json'
    }
})

customInstance.interceptors.request.use(function (config) {
    if (authToken) {
        config.headers.Authorization = authToken
    }

    return config
})

if (authToken) {
    customInstance.defaults.headers.common['Authorization'] = authToken
}

/**
 * 
 * @param {Object} config axios request config. Read more in: https://axios-http.com/ptbr/docs/req_config
 * @param {Function} fnSuccess function to handle with success response
 * @param {Function} fnFail function to handle with fail response
 * @param {Function} fnFinally function to handle when request to server is end
 * @returns 
 */
const customInstanceWithAutoResponseHandling = async (config = {}, fnSuccess = null, fnFail = null, fnFinally = null) => {
    useAppStore().stateData.requesting = true

    return customInstance.request(config).then((response) => {
        if (fnSuccess) {
            fnSuccess(response)
        }
    }).catch((response) => {
        const errorName = response.response.data.error

        if (errorName == 'UnauthenticatedException') {
            cookies.remove('auth_token')
            window.location.reload()
            return
        }

        useAlertStore().add(getServerMessage(errorName), null, 'fail', 5000)

        if (fnFail) {
            fnFail(response)
        }
    }).finally(() => {
        useAppStore().stateData.requesting = false

        if (fnFinally) {
            fnFinally()
        }
    })
}

/**
 * 
 * Custom axios instance: Handles server errors and unknown errors automatically,]
 * calling .then(()=>{}).catch(()=>{}).finally(()=>{})
 * 
 */
export const apiRequester = customInstanceWithAutoResponseHandling

/**
 * 
 * Custom axios instance: Does not handle server errors and unknown errors
 * 
 */
export const apiReq = customInstance

/**
 * 
 * Default axios
 * 
 */
export const axios = axiosJs