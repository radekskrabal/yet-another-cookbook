import * as actions from '../actions/action-types';

export function createGetRecipesSuccessAction(recipes: IRecipe[]) {
    return {
        type: actions.GET_RECIPES_SUCCESS,
        recipes
    };
}

export function createToggleFinishAction(recipe_id: number, index: number) {
    return {
        type: actions.TOGGLE_RECIPE_FINISH,
        index,
        recipe_id
    };
}

export function createToggleIngredientAction(recipe_id: number, index: number) {
    return {
        type: actions.TOGGLE_RECIPE_INGREDIENT,
        index,
        recipe_id
    };
}

export function createToggleMethodAction(recipe_id: number, index: number) {
    return {
        type: actions.TOGGLE_RECIPE_METHOD,
        index,
        recipe_id
    };
}