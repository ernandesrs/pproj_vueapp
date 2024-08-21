import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import { apiRequester } from "@/core/plugins/requester"
import { useAlertStore } from "./alert"
import cookies from "@/core/plugins/cookies"
import router from "@/router"

export const useUserStore = defineStore('user', () => {
    /**
     * 
     * 
     * 
     * Vars
     * 
     * 
     * 
     */

    /**
     * State data
     */
    const stateData = reactive({
        user: null,
        roles: null
    })

    /**
     * 
     * 
     * 
     * Methods
     * 
     * 
     * 
     */

    /**
     * Login
     * @param {*} email 
     * @param {*} password 
     * @param {*} remember 
     * @returns Promise
     */
    const login = async (email, password, remember = false) => {
        return apiRequester({
            url: '/auth/login',
            method: 'post',
            data: {
                email: email,
                password: password,
                remember: remember
            }
        }, (resp) => {
            const data = resp.data
            const expirationInMinutesToDays = data.auth.expirationInMinutes
                ? data.auth.expirationInMinutes / 1440
                : null

            cookies.set('auth_token', data.auth.fullToken, {
                expires: expirationInMinutesToDays
            })

            useAlertStore().add('Pronto! Seu login foi efetuado com sucesso!', 'Bem vindo(a)!', 'success', 5000, true)

            window.location.reload()
        })
    }

    /**
     * Logout
     * @returns Promise
     */
    const logout = async () => {
        return apiRequester({
            url: '/auth/logout',
            method: 'post'
        }, () => {
            cookies.remove('auth_token')
            useAlertStore().add('Você foi deslogado com sucesso!', null, 'warning', 5000, true)
            router.replace({ name: 'auth.login' })
        })
    }

    const getMe = async () => {
        return apiRequester({
            method: 'get',
            url: '/me',
        }, (resp) => {
            stateData.user = resp.data?.me
            stateData.roles = resp.data?.roles
        }, () => {
            stateData.user = null;
        })
    }

    /**
     * 
     * 
     * 
     * Computeds
     * 
     * 
     * 
     */
    const getFullName = computed(() => {
        return stateData.user?.first_name + ' ' + stateData.user?.last_name
    })

    return {
        stateData,

        login,
        logout,

        getMe,

        getFullName
    }
})