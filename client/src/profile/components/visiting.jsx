import React from 'react'
import Recipelist from '../../util/recipelist'
import FriendButtons from '../../util/friendButtons'

const Visiting = ({ currentUser, friendUser, unfriendUser, pageOwner, recipes }) => {
    return(
        <div>
            <h1>{pageOwner.username}</h1>
            <h3>Their recipes</h3>
            <Recipelist recipes={recipes}/>
            <FriendButtons currentUser={currentUser} pageOwner={pageOwner} friend={friendUser} unfriend={unfriendUser}/>
        </div>
    )
}

export default Visiting