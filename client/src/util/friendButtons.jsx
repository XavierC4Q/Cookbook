import React from 'react'

const FriendButtons = ({ currentUser, pageOwner, friend, unfriend }) => {
    if(!currentUser){
        return ''
    }
    let isFriend = currentUser.friends.includes(pageOwner.username)
    if(isFriend){
        return <button onClick={() => friend(currentUser._id, pageOwner.username)}>ADD FRIEND</button>
    }
    else {
        return <button onClick={() => unfriend(currentUser._id, pageOwner.username)}>REMOVE FRIEND</button>
    }
}

export default FriendButtons