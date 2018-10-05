import {combineReducers} from 'redux'
import { reducer as FormReducer } from 'redux-form'
import auth from './auth'
import profile from './profile'
import recipe from './recipe'

export default combineReducers({
    auth,
    profile,
    recipe,
    form: FormReducer
})