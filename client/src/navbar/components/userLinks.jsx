import React from 'react'
import { Link } from 'react-router-dom'

import VisitingLinks from './visitingLinks'
import LoggedInLinks from './loggedInLinks'

const UserLinks = ({ currentUser, logout }) => {
    if(!currentUser){
        return (<VisitingLinks />)
    }
    else {
        return (<LoggedInLinks currentUser={currentUser} logout={logout}/>)
    }
}

export default UserLinks