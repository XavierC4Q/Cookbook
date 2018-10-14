import axios from 'axios'
import { default as actions } from './actions'

const logoutUser = () => {
    return (dispatch) => {
        axios.get('/logout')
        .then(() => {
            dispatch(actions.logout())
        })
        .catch(error => {
            dispatch(actions.profileError(error))
        })
    }
}

export default {
    logoutUser
}