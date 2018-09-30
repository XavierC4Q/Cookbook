import {combineReducers} from 'redux'
import { reducer as FormReducer } from 'redux-form'
import auth from './auth'

export default combineReducers({
    auth,
    form: FormReducer
})