import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

class Login extends React.Component {
    render() {
        const { handleSubmit, loginUser, currentUser } = this.props
        if(currentUser){
            return (<Redirect to='/cookbook'/>)
        }
        return (
            <div>
                <h1>WELCOME BACK, LOGIN BELOW</h1>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div>
                        <label>USERNAME</label>
                        <Field name='username' component='input' />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <Field name='password' component='input' />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (values) => {
            dispatch(dispatches.loginUser(values))
        }
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default withRouter(reduxForm({
    form: 'Login'
})(Login))

