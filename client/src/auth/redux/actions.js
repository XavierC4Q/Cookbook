import constants from './constants'

const login = (loginInfo) => {
    return {
        type: constants.LOGIN,
        login: loginInfo
    }
}

const register = (registerInfo) => {
    return {
        type: constants.REGISTER,
        register: registerInfo
    }
}

const isLoggedIn = (info) => {
    return {
        type: constants.IS_LOGGED_IN,
        loggedIn: info
    }
}

const logout = () => {
    return {
        type: constants.LOGOUT
    }
}

const userAuthError = (error) => {
    return {
        type: constants.USER_AUTH_ERROR,
        userError: error
    }
}

module.exports = {
    login,
    register,
    logout,
    isLoggedIn,
    userAuthError
}