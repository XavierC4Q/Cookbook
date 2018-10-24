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
            ingredients,
            image
        } = recipe

        let data = new FormData()

        for (let k in recipe){
            data.append(`${k}`, recipe[k])
        }

        axios.post('/recipe/add',data)
        .then(res => {
            console.log(res)
            dispatch(actions.addRecipe(res.data))
        })
        .catch(error => {
            dispatch(actions.recipeError(error))
        })
    }
}

const addFriend = (id, friend) => {
    return (dispatch) => {
        axios.post('/users/addFriend', {
            id: id,
            friend: friend
        })
        .then(res => {
            dispatch(actions.addFriend(res.data))
        })
        .catch(error => {
            dispatch(actions.profileError(error))
        })
    }
}

const removeFriend = (id, friend) => {
    return (dispatch) => {
        axios.patch('/users/removeFriend', {
            id: id,
            friend: friend
        })
        .then(res => {
            dispatch(actions.removeFriend(res.data))
        })
        .catch(error => {
            dispatch(actions.profileError(error))
        })
    }
}

export default {
    getUserInfo,
    getUserRecipes,
    addUserRecipe,
    logoutUser,
    addFriend,
    removeFriend
}