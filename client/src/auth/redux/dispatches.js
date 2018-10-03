import { default as actions } from './actions'
import axios from 'axios'

const loginUser = (values) => {
    return (dispatch) => {
        const {
            username,
            password
        } = values

        axios.post('/login', {
                username: username,
                password: password
            })
            .then(res => {
                dispatch(actions.login(res.data))
            })
            .catch(error => {
                dispatch(actions.userAuthError(error))
            })
    }
}

const registerUser = (values) => {
    return (dispatch) => {
        const {
            username,
            password,
            email,
            firstName,
            lastName,
            age
        } = values

        axios.post('/register', {
            username: username,
            password: password,
            age: age,
            email: email,
            firstName: firstName,
            lastName: lastName
        })
        .then(res => {
            dispatch(actions.register(res.data))
        })
        .catch(error => {
            dispatch(actions.userAuthError(error))
        })
    }
}

export default {
    loginUser,
    registerUser
}