export default (state = { recipes: [], message: '' }, action) => {
    switch(action.type){
        case 'GET_USER_RECIPES':
            return {
                ...state,
                recipes: [...action.recipes]
            }
        case 'ADD_RECIPE':
            return {
                recipes: [...state.recipes, action.recipe],
                message: 'RECIPE ADDED'
            }
        case 'RECIPE_ERROR':
            return {
                ...state,
                message: `ERROR IN RECIPE ${action.recipeError}`
            }
        default:
            return state
    }
}