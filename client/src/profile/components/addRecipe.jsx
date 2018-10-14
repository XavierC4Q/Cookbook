import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { default as dispatches } from '../redux/dispatches'
import { FormInputs, FormArrays } from '../../util/formfields'


class AddRecipe extends React.Component {
    constructor(){
        super()
        this.state = {
            redirectToProfile: false
        }
    }

    componentDidMount(){
        this.setState({ redirectToProfile: false })
    }

    submitRecipe = (values) => {
        const { currentUser, addRecipe } = this.props
        const { recipeName, vegan, vegetarian, ingredients, description } = values


        const newRecipe = {
            username: currentUser.username,
            recipeName: recipeName,
            vegan: vegan,
            vegetarian: vegetarian,
            description: description,
            ingredients: ingredients
        }

        addRecipe(newRecipe)
        this.setState({ redirectToProfile: true })
    }

    render() {
        const { handleSubmit, currentUser, addRecipe, location } = this.props

        if(!currentUser) return (<Redirect to='/'/>)

        const profilepath = `/profile/${currentUser.username}`

        if(this.state.redirectToProfile) return (<Redirect to={profilepath}/>)
        
        return (
            <div>
                <h1>ADD YOUR RECIPE</h1>
                <form onSubmit={handleSubmit(this.submitRecipe)}>
                    <Field label='Recipe Name' name='recipeName' type='text' component={FormInputs} />
                    <Field label='Vegetarian' name='vegetarian' type='checkbox' component={FormInputs} />
                    <Field label='Vegan' name='vegan' type='checkbox' component={FormInputs} />
                    <Field name='description' label='Recipe Description' type='textarea' component={FormInputs} />
                    <FieldArray name='ingredients' label='Ingredients' component={FormArrays} />
                    <button type='submit'>SUBMIT NEW RECIPE</button>
                </form>
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
        addRecipe: (recipe) => {
            dispatch(dispatches.addUserRecipe(recipe))
        }
    }
}

AddRecipe = connect(mapStateToProps, mapDispatchToProps)(AddRecipe)

export default reduxForm({
    form: 'AddRecipe'
})(AddRecipe)