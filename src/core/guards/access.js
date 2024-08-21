import cookies from "../plugins/cookies"
import { useUserStore } from "@/stores/user"

const getAuthToken = () => {
    return cookies.get('auth_token')
}

export const onlyAuthenticatedCanAccess = (to, from, next) => {
    let authToken = getAuthToken()
    let route = null

    if (!authToken) {
        route = {
            name: 'auth.login'
        }
    } else if (authToken && !useUserStore().stateData.user?.id) {
        useUserStore().getMe().finally(() => {
            if (!useUserStore().stateData.user?.id) {
                cookies.remove('auth_token')
                route = {
                    name: 'auth.login'
                }
            }
        })
    }

    next(route)
}

export const onlyUnauthenticatedCanAccess = (to, from, next) => {
    let authToken = getAuthToken()
    let route = null

    if (authToken) {
        route = {
            name: 'home'
        }
    }

    next(route)
}