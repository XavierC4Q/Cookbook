import React from 'react'

const Recipe = ({ recipe }) => {
    const { recipeName, username, vegan, vegetarian, ingredients, description } = recipe

    return (
        <div>
            <h3>{recipeName}</h3>
            <p>{description}</p>
            {ingredients.map(ingredient => (
                <p>{ingredient}</p>
            ))}
            <p>By {username}</p>
        </div>
    )
}

export default Recipe