import * as actions from '../actions/action-types';
import * as recipeApi from '../api/recipe-api';

const initialRecipesState: IRecipeState = {
    recipes: [],
    filter: { category_id: null, query: null, recipes: [] },
    filterById: { recipe_id: null, recipe: null }
};
const recipeReducer = (state: IRecipeState = initialRecipesState, action: any): IRecipeState => {
    switch(action.type) {
        case actions.DISPLAY_RECIPE:
            let { recipe_id } = action;

            recipeApi.getRecipe(recipe_id);
            return Object.assign({}, state, {
                filter: state.filter,
                filterById: { recipe_id, recipe: null }
            });
        case actions.GET_RECIPE_SUCCESS:
            let { recipe } = action;

            return Object.assign({}, state, {
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: state.filterById.recipe_id , recipe }
            });
        case actions.GET_RECIPES_SUCCESS:
            return Object.assign({}, state, { recipes: action.recipes });
        case actions.SEARCH_RECIPES:
            let { category_id, query} = action;

            return Object.assign({}, state, {
                filter: { category_id, query, recipes: filterRecipes(state.recipes, category_id, query) },
                filterById: { recipe_id: null, recipe: null }
            });
    }

    return state;
};

const filterRecipes = (recipes: IRecipe[], category_id: number, query: string): IRecipe[] => {
    return recipes.filter(r => matchRecipe(r, category_id, query));
};

const matchRecipe = (recipe: IRecipe, category_id: number, query: string): boolean => {
    if (category_id !== null && recipe.category_id !== category_id) {
        return false;
    }

    if (query === null) {
        return true;
    }

    let { category, name } = recipe;
    return [ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()))
};

export default recipeReducer;