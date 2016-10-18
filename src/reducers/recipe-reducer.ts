import * as actions from '../actions/action-types';
import * as recipeApi from '../api/recipe-api';

const initialRecipesState: IRecipeState = {
    recipe: null,
    recipes: [],
    filter: { category_id: null, query: null }
};
const recipeReducer = (state: IRecipeState = initialRecipesState, action: any): IRecipeState => {
    switch(action.type) {
        case actions.DISPLAY_RECIPE:
            let { recipe_id } = action;

            recipeApi.getRecipe(recipe_id);
            break;
        case actions.GET_RECIPE_SUCCESS:
            let { recipe } = action;

            return Object.assign({}, state, {
                recipe
            });
        case actions.GET_RECIPES_SUCCESS:
            return Object.assign({}, state, { recipes: action.recipes });
        case actions.SET_FILTER:
            return Object.assign({}, state, { filter: { query: action.query, category_id: action.category_id } });
    }

    return state;
};

export default recipeReducer;