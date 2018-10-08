import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { default as dispatches } from '../redux/dispatches'

const renderIngredients = ({ fields, label }) => (
    <ol>
        <label>{label}</label>
        {
            fields.map((ingredient, i) => (
                <li key={i}>
                    <label>Ingredient {i + 1}</label>
                    <Field name={`${ingredient}`} type='text' component='input' />
                    <button onClick={(e) => {
                        e.preventDefault()
                        fields.remove(i)
                    }}>Remove ingredient</button>
                </li>
            ))
        }
        <div>
            <button onClick={(e) => {
                e.preventDefault()
                fields.push()
            }}>ADD INGREDIENT</button>
        </div>
    </ol>
);

const renderInputs = ({ name, input, type, label }) => (
    <div>
        <label>{label}</label>
        <div>
            <input name={name} type={type} {...input} placeholder={label} />
        </div>
    </div>
);

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
        const { handleSubmit, currentUser, addRecipe } = this.props

        if(!currentUser) return (<Redirect to='/'/>)

        const profilepath = `/profile/${currentUser.username}`

        if(this.state.redirectToProfile) return (<Redirect to={profilepath}/>)
        
        return (
            <div>
                <h1>ADD YOUR RECIPE</h1>
                <form onSubmit={handleSubmit(this.submitRecipe)}>
                    <Field label='Recipe Name' name='recipeName' type='text' component={renderInputs} />
                    <Field label='Vegetarian' name='vegetarian' type='checkbox' component={renderInputs} />
                    <Field label='Vegan' name='vegan' type='checkbox' component={renderInputs} />
                    <Field name='description' label='Recipe Description' type='textarea' component={renderInputs} />
                    <FieldArray name='ingredients' label='INGREDIENTS' component={renderIngredients} />
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

export default withRouter(reduxForm({
    form: 'AddRecipe'
})(AddRecipe))