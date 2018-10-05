const Recipe = require('../models/recipe')

function allUserRecipes(req, res){
    const {
        username
    } = req.params

    Recipe.find({ username: username }, (error, recipes) => {
        if(error) return res.write(error)
        if(!recipes) return res.write(new Error('FAILED ALL RECIPES'))

        return res.json(recipes)
    })
}

function addRecipe(req, res){
    const {
        username,
        recipeName,
        vegan,
        vegetarian,
        description,
        ingredients
    } = req.body

    let newRecipe = new Recipe({
        username,
        recipeName,
        description,
        vegan,
        vegetarian,
        ingredients
    })
    newRecipe.save((error, recipe) => {
        if(error) return res.write(error)
        if(!recipe) return res.write(new Error('CANNOT SAVE NEW RECIPE'))

        res.json(recipe)
    })
}

module.exports = {
    addRecipe,
    allUserRecipes
}