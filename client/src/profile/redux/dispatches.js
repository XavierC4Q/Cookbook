import { default as actions } from './actions'
import axios from 'axios'

const getUserInfo = (username) => {
    return (dispatch) => {
        axios.get(`/users/find/${username}`)
        .then(res => {
            dispatch(actions.getUser(res.data))
        })
        .catch(error => {
            dispatch(actions.profileError(error))
        })
    }
}

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

const getUserRecipes = (username) => {
    return (dispatch) => {
        axios.get(`/recipe/all/${username}`)
        .then(res => {
            dispatch(actions.getUserRecipes(res.data))
        })
        .catch(error => {
            dispatch(actions.profileError(error))
        })
    }
}

const addUserRecipe = (recipe) => {
    return (dispatch) => {
        const {
            username,
            recipeName,
            vegan, 
            vegetarian,
            description,
            ingredients
        } = recipe

        axios.post('/recipe/add', {
            username: username,
            recipeName: recipeName,
            vegan: vegan,
            vegetarian: vegetarian,
            description: description,
            ingredients: ingredients
        })
        .then(res => {
            dispatch(actions.addRecipe(res.data))
        })
        .catch(error => {
            dispatch(actions.recipeError(error))
        })
    }
}

export default {
    getUserInfo,
    getUserRecipes,
    addUserRecipe,
    logoutUser
}