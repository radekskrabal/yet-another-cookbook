import * as actions from './action-types';
import { createGetRecipesSuccessAction } from './recipe-actions';

describe('recipe actions', () => {
    it('getRecipesSuccess should create GET_RECIPES_SUCCESS action', () => {
        const recipes = [
            { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ '4 egg yolks' ], method: [ 'Start boiling the water.' ] }
        ];
        expect(createGetRecipesSuccessAction(recipes)).toEqual({
            type: actions.GET_RECIPES_SUCCESS,
            recipes
        });
    });
});
