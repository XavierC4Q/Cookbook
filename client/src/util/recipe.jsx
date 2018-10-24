import React from 'react'

const Recipe = ({ recipe }) => {
    const { recipeName, username, vegan, vegetarian, ingredients, description, image } = recipe
    console.log('RECIPE IMAGE FRONTEND', image)
    return (
        <div>
            <h3>{recipeName}</h3>
            <img src={image} alt='recipeImage'/>
            <p>{description}</p>
            {ingredients.map(ingredient => (
                <p>{ingredient}</p>
            ))}
            <p>By {username}</p>
        </div>
    )
}

export default Recipe