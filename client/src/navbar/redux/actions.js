import constants from './constants'

const logout = () => {
    return {
        type: constants.LOGOUT
    }
}

const profileError = (error) => {
    return {
        type: constants.PROFILE_ERROR,
        profileError: error
    }
}

export default {
    logout,
    profileError
}