import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

import '../styles/landing.css'

class Landing extends React.Component {

    componentDidMount(){
        this.props.getLoggedInUser()
    }

    render(){
        const { currentUser } = this.props
        if(currentUser){
            return (<Redirect to='/cookbook'/>)
        }
        return (
            <div className='landing-container'>
                <p className='landing-title'>WELCOME TO COOKBOOK</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        authError: state.auth.message                                       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLoggedInUser: () => dispatch(dispatches.getLoggedInUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing))