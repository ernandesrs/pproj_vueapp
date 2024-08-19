import cookies from "../plugins/cookies"

const getAuthToken = () => {
    return cookies.get('auth_token')
}

export const onlyAuthenticated = (to, from, next) => {
    let authToken = getAuthToken()
    let route = null

    if (!authToken) {
        route = {
            name: 'auth.login'
        }
    }

    next(route)
}

export const onlyUnauthenticated = (to, from, next) => {
    let authToken = getAuthToken()
    let route = null

    if (authToken) {
        route = {
            name: 'home'
        }
    }

    next(route)
}