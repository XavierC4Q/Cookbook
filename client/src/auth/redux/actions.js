import constants from './constants'

const login = (loginInfo) => {
    console.log(loginInfo)
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

const userAuthError = (error) => {
    return {
        type: constants.USER_AUTH_ERROR,
        userError: error
    }
}


export default {
    login,
    register,
    userAuthError
}