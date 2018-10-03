import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { default as dispatches } from '../redux/dispatches'

class Register extends React.Component {
    render() {
        const { handleSubmit, registerUser, currentUser } = this.props
        if(currentUser){
            return (<Redirect to='/cookbook'/>)
        }
        return (
            <div>
                <h1>REGISTER BELOW</h1>
                <form onSubmit={handleSubmit(registerUser)}>
                    <div>
                        <label>USERNAME</label>
                        <Field name='username' component='input' />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <Field name='password' component='input' />
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <Field name='email' component='input' />
                    </div>
                    <div>
                        <label>FIRST NAME</label>
                        <Field name='firstName' component='input' />
                    </div>
                    <div>
                        <label>LAST NAME</label>
                        <Field name='lastName' component='input' />
                    </div>
                    <div>
                        <label>AGE</label>
                        <Field name='age' component='input' />
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
        registerUser: (values) => {
            dispatch(dispatches.registerUser(values))
        }
    }
}

Register = connect(mapStateToProps, mapDispatchToProps)(Register)

export default withRouter(reduxForm({
    form: 'Register'
})(Register))