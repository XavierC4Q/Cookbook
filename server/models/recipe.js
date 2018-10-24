const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RecipeSchema = new schema({
    username: {
        type: String,
        required: true
    },
    recipeName: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date.now(),
    },
    vegan: {
        type: Boolean,
        default: false
    },
    vegetarian: {
        type: Boolean,
        default: false
    },
    ingredients: Array,
    description: String,
    image: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;