import * as actions from '../actions/action-types';

export function createDisplayRecipeAction(recipe_id: number) {
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

export function createSetFilterAction(query: string, category_id: number) {
    return {
        type: actions.SET_FILTER,
        query,
        category_id
    };
}