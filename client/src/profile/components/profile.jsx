import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

import UserProfile from './userprofile'

class Profile extends React.Component {
    
    componentDidMount(){
        this.props.getUser(this.props.username)
        this.props.getRecipes(this.props.username)
    }

    render(){
        const { currentUser, pageOwner, recipes, addRecipe, logout, friendUser, unfriendUser, location } = this.props
        return (
            pageOwner ? <UserProfile 
                        currentUser={currentUser} 
                        pageOwner={pageOwner} 
                        addRecipe={addRecipe}
                        recipes={recipes}
                        friendUser={friendUser}
                        unfriendUser={unfriendUser}
                        location={location}
                        logout={logout}
                        /> 
                        : 
                        <div>USER NOT FOUND</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        pageOwner: state.profile.user,
        recipes: state.recipe.recipes,
        authError: state.auth.message,
        profileError: state.profile.message,
        recipeError: state.recipe.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (username) => {
            dispatch(dispatches.getUserInfo(username))
        },
        getRecipes: (username) => {
            dispatch(dispatches.getUserRecipes(username))
        },
        addRecipe: (recipe) => {
            dispatch(dispatches.addUserRecipe(recipe))
        },
        logout: () => {
            dispatch(dispatches.logoutUser())
        },
        friendUser: (id, friend) => {
            dispatch(dispatches.addFriend(id, friend))
        },
        unfriendUser: (id, friend) => {
            dispatch(dispatches.removeFriend(id, friend))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))