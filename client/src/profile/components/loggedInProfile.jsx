import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Recipelist from '../../util/recipelist'

const LoggedInProfile = ({ pageOwner, recipes, logout }) => {
    return(
        <div>
            <nav>
                <Link to='/addRecipe'>ADD RECIPE</Link>
            </nav>
            <h1>Welcome Back {pageOwner.username}</h1>
            <Recipelist recipes={recipes}/>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}

export default withRouter(LoggedInProfile)