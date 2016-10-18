import * as actions from './action-types';
import { getRecipeSuccess, getRecipesSuccess, createSetFilterAction } from './recipe-actions';

describe('recipe actions', () => {
    it('getRecipeSuccess should create GET_RECIPE_SUCCESS action', () => {
        const recipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ '4 egg yolks' ], method: [ 'Start boiling the water.' ] };
        expect(getRecipeSuccess(recipe)).toEqual({
            type: actions.GET_RECIPE_SUCCESS,
            recipe
        });
    });

    it('getRecipesSuccess should create GET_RECIPES_SUCCESS action', () => {
        const recipes = [
            { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ '4 egg yolks' ], method: [ 'Start boiling the water.' ] }
        ];
        expect(getRecipesSuccess(recipes)).toEqual({
            type: actions.GET_RECIPES_SUCCESS,
            recipes
        });
    });

    it('searchRecipes should create SET_FILTER action', () => {
        const query = '';
        const category_id = 0;
        expect(createSetFilterAction(query, category_id)).toEqual({
            type: actions.SET_FILTER,
            query,
            category_id
        });
    });
});
