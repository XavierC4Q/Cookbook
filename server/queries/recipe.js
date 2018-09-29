const Recipe = require('../models/recipe')

function addRecipe(req, res){
    const {
        username,
        recipeName,
        vegan,
        vegetarian,
        ingredients
    } = req.body

    let newRecipe = new Recipe({
        username,
        recipeName,
        vegan,
        vegetarian
    })

    newRecipe.save((error, recipe) => {
        if(error) return res.write(error)
        if(!recipe) return res.write(new Error('ERROR SAVING RECIPE'))

        Recipe.findByIdAndUpdate(recipe._id, { $pushAll: { ingredients: ingredients } }, { upsert: true }, (error, success) => {
            if(error) return res.write(error)
            if(!success) return res.write(new Error('FAILED ADDING INGREDIENTS'))

            res.json(success)
        })
    })
}

module.exports = {
    addRecipe
}