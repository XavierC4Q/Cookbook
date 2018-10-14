import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

import HomeLink from './homeLink'
import UserLinks from './userLinks'
import Search from './search'

import '../styles/navbar.css'

class NavBar extends Component {

    render(){
        const { currentUser, logout } = this.props
        return (
            <div className='navbar-container'>
                <HomeLink/>
                <Search/>
                <UserLinks currentUser={currentUser} logout={logout}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(dispatches.logoutUser())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))