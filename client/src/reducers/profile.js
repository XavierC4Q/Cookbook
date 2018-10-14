export default (state = { user: null, message: '' }, action) => {
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_FRIEND':
            return {
                user: action.user,
                message: `Added ${action.user.friends[action.user.friends.length - 1]}`
            }
        case 'REMOVE_FRIEND':
            return {
                user: action.user,
                message: 'Removed friend'
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