import React from 'react'
import Visiting from './visiting'
import LoggedInProfile from './loggedInProfile'

const UserProfile = ({ currentUser, friendUser, unfriendUser, recipes, pageOwner, location, logout }) => {
    if(!currentUser){
        return (<Visiting 
            currentUser={currentUser} 
            friendUser={friendUser} 
            unfriendUser={unfriendUser}
            recipes={recipes}
            location={location} 
            pageOwner={pageOwner}
            />)
    }

    if(currentUser.username === pageOwner.username){
        return (<LoggedInProfile 
                pageOwner={currentUser} 
                recipes={recipes}
                location={location} 
                logout={logout}
                />)
    }
    else {
        return (<Visiting 
                currentUser={currentUser} 
                friendUser={friendUser} 
                unfriendUser={unfriendUser}
                recipes={recipes} 
                location={location}
                pageOwner={pageOwner}
                />)
    }
}

export default UserProfile