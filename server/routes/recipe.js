const express = require('express')
const recipeRouter = express.Router()
const {loginRequired} = require('../helpers/loginRequired')
const queries = require('../queries/recipe')
const multer = require('multer')
const storage = require('../helpers/storage')
const recipeUpload = multer({ storage: storage.recipeStorage })

recipeRouter.get('/all/:username', queries.allUserRecipes)
recipeRouter.post('/add', loginRequired, recipeUpload.single('image'), queries.addRecipe)

module.exports = recipeRouter