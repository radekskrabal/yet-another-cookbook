import { Dispatch } from 'react-redux';

import { decorateRecipes, sortRecipes, IRecipe } from './models/recipe';
import { createGetRecipesSuccessAction } from '../actions/recipe-actions';
import * as Http from '../modules/http';

export function getRecipes(dispatch: Dispatch<void>): Promise<any> {
    return fetch(Http.buildUrl('data/recipes.json'))
        .then(Http.parseJson)
        .then(decorateRecipes)
        .then(sortRecipes)
        .then((recipes: IRecipe[]) => {
            dispatch(createGetRecipesSuccessAction(recipes));
        });
}
