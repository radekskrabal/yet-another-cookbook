import * as actions from '../actions/action-types';

export function createGetRecipesSuccessAction(recipes: IRecipe[]) {
    return {
        type: actions.GET_RECIPES_SUCCESS,
        recipes
    };
}