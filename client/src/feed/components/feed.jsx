import React from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Feed = ({ currentUser }) => {
    if(!currentUser){
        return (<Redirect to='/'/>)
    }
    const profilepath = `/profile/${currentUser.username}`
    return (
        <div>
            <nav>
                <Link to={profilepath}>PROFILE PAGE</Link>
            </nav>
            <h1>USER FEED</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        authError: state.auth.message 
    }
}

export default withRouter(connect(mapStateToProps)(Feed))