import React from 'react'
import Recipe from './recipe'

const Recipelist = ({ recipes }) => {
    return(
        <ul>
            {recipes.map(recipe => (
                <Recipe recipe={recipe}/>
            ))}
        </ul>
    )
}

export default Recipelist