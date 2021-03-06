export default (state = { currentUser: null, message: '' }, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.login,
                message: 'LOGGED IN SUCCESS'
            }
        case 'REGISTER':
            return {
                ...state,
                currentUser: action.register,
                message: 'REGISTERED ACCOUNT SUCCESSFULLY'
            }
        case 'IS_LOGGED_IN':
            return {
                ...state,
                currentUser: action.loggedIn
            }
        case 'LOGOUT':
            return {
                currentUser: null,
                message: 'LOGGED OUT SUCCESSFULLY'
            }
        case 'USER_AUTH_ERROR':
            return {
                ...state,
                message: `ERROR USER AUTH ${action.userError}`
            }
        default:
            return state
    }
}