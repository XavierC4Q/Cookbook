import React from 'react'
import Visiting from './visiting'
import LoggedInProfile from './loggedInProfile'

const UserProfile = ({ currentUser, recipes, pageOwner, logout }) => {

    if(!currentUser){
        return (<Visiting pageOwner={pageOwner}/>)
    }
    else if(currentUser.username === pageOwner.username){
        return (<LoggedInProfile pageOwner={pageOwner} recipes={recipes} logout={logout}/>)
    }
    else {
        return (<Visiting pageOwner={pageOwner}/>)
    }
}

export default UserProfile