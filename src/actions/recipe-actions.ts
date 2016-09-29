import * as actions from '../actions/action-types';

export function displayRecipe(recipe_id: number) {
    return {
        type: actions.DISPLAY_RECIPE,
        recipe_id
    };
}

export function getRecipeSuccess(recipe: IRecipe) {
    return {
        type: actions.GET_RECIPE_SUCCESS,
        recipe
    };
}

export function getRecipesSuccess(recipes: IRecipe[]) {
    return {
        type: actions.GET_RECIPES_SUCCESS,
        recipes
    };
}

export function searchRecipes(query: string, category_id: number) {
    return {
        type: actions.SEARCH_RECIPES,
        query,
        category_id
    };
}