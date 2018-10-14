import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInLinks = ({ currentUser, logout }) => {
    let profilepath = `/profile/${currentUser.username}`

    return (
        <div className='userlinks-container'>
            <Link to={profilepath}>PROFILE</Link>
            <div>
                <button onClick={logout}>Logout User</button>
            </div>
        </div>
    )
}

export default LoggedInLinks