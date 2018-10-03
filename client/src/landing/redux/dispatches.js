import { default as actions } from './actions'
import axios from 'axios'

const getLoggedInUser = () => {
    return (dispatch) => {
        axios.get('/isLoggedIn')
        .then(res => {
            dispatch(actions.isLoggedIn(res.data))
        })
        .catch(error => {
            dispatch(actions.userAuthError(error))
        })
    }
}

export default {
    getLoggedInUser
}