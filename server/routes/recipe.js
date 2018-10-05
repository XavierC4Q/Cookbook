const express = require('express')
const recipeRouter = express.Router()
const {loginRequired} = require('../helpers/loginRequired')
const queries = require('../queries/recipe')

recipeRouter.get('/all/:username', queries.allUserRecipes)
recipeRouter.post('/add', loginRequired, queries.addRecipe)

module.exports = recipeRouter