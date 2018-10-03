import constants from './constants'

const isLoggedIn = (info) => {
    return {
        type: constants.IS_LOGGED_IN,
        loggedIn: info
    }
}

const userAuthError = (error) => {
    return {
        type: constants.USER_AUTH_ERROR,
        userError: error
    }
}

export default {
    isLoggedIn,
    userAuthError
}