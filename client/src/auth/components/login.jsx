import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'
import { FormInputs } from '../../util/formfields'

import '../styles/auth.css'

class Login extends React.Component {
    render() {
        const { handleSubmit, authError, pristine, loginUser, currentUser, location, reset, submitting } = this.props
        if(currentUser){
            return (<Redirect to='/cookbook'/>)
        }
        return (
            <div className='form-container'>
                <h1 className='form-header'>WELCOME BACK, LOGIN BELOW</h1>
                <form className='form' onSubmit={handleSubmit(loginUser)}>
                        <Field name='username' label='Username' component={FormInputs} />
                        <Field name='password' label='Password' component={FormInputs} />
                    <button className='form-button' type='submit' onClick={reset}>SUBMIT</button>
                    <p>{authError ? authError : ''}</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        authError: state.auth.message 
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

export default reduxForm({
    form: 'Login'
})(Login)

