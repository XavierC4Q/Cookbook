import React from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

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
            <div>
                <nav>
                    <Link to='/login'>LOGIN PAGE</Link>
                    {" "}
                    <Link to='/register'>REGISTER PAGE</Link>
                </nav>
                <h1>WELCOME TO COOKBOOK</h1>
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
        getLoggedInUser: () => dispatch(dispatches.getLoggedInUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing))