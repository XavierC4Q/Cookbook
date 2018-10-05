import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInProfile = ({ pageOwner, recipes, logout }) => {
    console.log('RECIPES', recipes)
    return(
        <div>
            <nav>
                <Link to='/addRecipe'>ADD RECIPE</Link>
            </nav>
            <h1>Welcome Back {pageOwner.username}</h1>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

export default LoggedInProfile