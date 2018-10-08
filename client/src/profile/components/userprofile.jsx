import React from 'react'
import Visiting from './visiting'
import LoggedInProfile from './loggedInProfile'

const UserProfile = ({ currentUser, recipes, pageOwner, logout }) => {

    if(!currentUser){
        return (<Visiting recipes={recipes} pageOwner={pageOwner}/>)
    }
    
    if(currentUser.username === pageOwner.username){
        return (<LoggedInProfile pageOwner={currentUser} recipes={recipes} logout={logout}/>)
    }
    else {
        return (<Visiting recipes={recipes} pageOwner={pageOwner}/>)
    }
}

export default UserProfile