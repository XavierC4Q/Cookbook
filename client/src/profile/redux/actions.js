import constants from './constants'

const getUser = (user) => {
    return {
        type: constants.GET_USER,
        user: user
    }
}

const getUserRecipes = (recipes) => {
    return {
        type: constants.GET_USER_RECIPES,
        recipes: recipes
    }
}

const addRecipe = (recipe) => {
    return {
        type: constants.ADD_RECIPE,
        recipe: recipe
    }
}

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

const recipeError = (error) => {
    return {
        type: constants.RECIPE_ERROR,
        recipeError: error
    }
}

const addFriend = (user) => {
    return {
        type: constants.ADD_FRIEND,
        user: user
    }
}

const removeFriend = (user) => {
    return {
        type: constants.REMOVE_FRIEND,
        user: user
    }
}

export default {
    getUser,
    getUserRecipes,
    addRecipe,
    logout,
    profileError,
    recipeError,
    addFriend,
    removeFriend
}