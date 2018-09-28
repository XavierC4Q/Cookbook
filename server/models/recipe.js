const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RecipeSchema = new schema({
    name: {
        type: String, 
        required: true
    },
    posted: {
        type: Number,
        required: true,
        default: Date.now()
    }
    ,
    vegan: {
        type: Boolean,
        default: false
    },
    vegetarian: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: {
            name: String,
            amount: String,
            measurement: String
        }
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
