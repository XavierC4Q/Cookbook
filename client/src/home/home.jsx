import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = () => {
    return (
        <div>
            <h1>HOME HOME HOME HOME</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentUser: state.auth.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(Home))