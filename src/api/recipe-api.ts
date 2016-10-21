import store from '../store';
import { createGetRecipesSuccessAction } from '../actions/recipe-actions';
import * as Http from '../modules/http';
import { decorateRecipes, sortRecipes } from '../modules/recipe';

export function getRecipes(): Promise<any> {
    return fetch(Http.buildUrl('data/recipes.json'))
        .then(Http.parseJson)
        .then(decorateRecipes)
        .then(sortRecipes)
        .then((recipes: IRecipe[]) => {
            store.dispatch(createGetRecipesSuccessAction(recipes));
        });
}