export default (state = { user: null, message: '' }, action) => {
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'PROFILE_ERROR':
            return {
                ...state,
                message: `YOUR ERROR WAS ${action.profileError}`
            }
        default:
            return state
    }
}