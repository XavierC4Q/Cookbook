import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'
import { FormInputs } from '../../util/formfields'

class Register extends React.Component {
    render() {
        const { handleSubmit, reset, pristine, registerUser, currentUser, location, submitting, authError } = this.props
        console.log('RERENDER IN REGISTER WHEN I INPUT')
        if (currentUser) {
            return (<Redirect to='/cookbook' />)
        }
        return (
            <div className='form-container'>
                <h1 className='form-header'>REGISTER BELOW</h1>
                <form className='form' onSubmit={handleSubmit(registerUser)}>
                    <div>
                        <Field name='username' label='Username' component={FormInputs} />
                    </div>
                    <div>
                        <Field name='password' label='Password' component={FormInputs} />
                    </div>
                    <div>
                        <Field name='email' label='Email' component={FormInputs} />
                    </div>
                    <div>
                        <Field name='firstName' label='First Name' component={FormInputs} />
                    </div>
                    <div>
                        <Field name='lastName' label='Last Name' component={FormInputs} />
                    </div>
                    <div>
                        <Field name='age' label='Age' component={FormInputs} />
                    </div>
                    <button className='form-button' onClick={reset} type='submit'>SUBMIT</button>
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
        registerUser: (values) => {
            dispatch(dispatches.registerUser(values))
        }
    }
}

Register = withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))

export default reduxForm({
    form: 'Register'
})(Register)