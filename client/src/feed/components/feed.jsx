import React from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/feed.css'

const Feed = ({ currentUser, location }) => {
    if(!currentUser){
        return (<Redirect to='/'/>)
    }
    const profilepath = `/profile/${currentUser.username}`
    return (
        <div>
            <h1>USER FEED</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentUser: state.auth.currentUser,
        authError: state.auth.message 
    }
}

export default connect(mapStateToProps)(Feed)