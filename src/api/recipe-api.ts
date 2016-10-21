import store from '../store';
import { getRecipesSuccess, getRecipeSuccess } from '../actions/recipe-actions';
import * as Http from '../modules/http';

function sortRecipes(recipes: IRecipe[]): IRecipe[] {
    let compareRecipes = (a: IRecipe, b: IRecipe): number => {
        if (a.category !== b.category) {
            return a.category > b.category ? 1 : -1;
        }

        return a.name > b.name ? 1 : -1;
    };

    return recipes.sort(compareRecipes);
}

function findRecipe(id: number, recipes: IRecipe[]): IRecipe {
    return recipes.find(r => r.id === id);
}

export function getRecipes(): Promise<any> {
    return fetch(Http.buildUrl('data/recipes.json'))
        .then(Http.parseJson)
        .then(sortRecipes)
        .then((recipes: IRecipe[]) => {
            store.dispatch(getRecipesSuccess(recipes));
        });
}

export function getRecipe(id: number): void {
    fetch(Http.buildUrl('data/recipes.json'))
        .then(Http.parseJson)
        .then(sortRecipes)
        .then((recipes: IRecipe[]) => {
            let recipe = findRecipe(id, recipes);
            store.dispatch(getRecipeSuccess(recipe));
        });
}