import cookies from "../plugins/cookies"

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