import Cookies from "js-cookie"

const KEY_BASE = import.meta.env.VITE_APP_NAME.toLowerCase().split(' ').join('_')

const getFullKey = (key) => {
    return KEY_BASE + '_' + key
}

export default {
    /**
     * Set cookie
     * @param {*} key 
     * @param {*} value 
     * @param {*} options 
     */
    set: (key, value, options = {}) => {
        if (typeof value == 'object') {
            value = JSON.stringify(value)
        }

        Cookies.set(getFullKey(key), value, options)
    },

    /**
     * Get cookie
     * @param {*} key 
     * @returns 
     */
    get: (key) => {
        let value = Cookies.get(getFullKey(key))

        try {
            value = JSON.parse(value);
        } catch {
            // 
        }

        return value ?? null;
    },

    /**
     * Remove cookie
     * @param {*} key 
     * @param {*} options 
     */
    remove: (key, options = {}) => {
        Cookies.remove(getFullKey(key), options)
    }
}