import store from '../store';
import { createGetRecipesSuccessAction } from '../actions/recipe-actions';
import * as Http from '../modules/http';
import { sortRecipes } from '../modules/recipe';

export function getRecipes(): Promise<any> {
    return fetch(Http.buildUrl('data/recipes.json'))
        .then(Http.parseJson)
        .then((recipes: IRecipe[]) => recipes.sort(sortRecipes))
        .then((recipes: IRecipe[]) => {
            store.dispatch(createGetRecipesSuccessAction(recipes));
        });
}