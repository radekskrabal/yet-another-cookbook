import * as actions from '../../src/actions/action-types';
import { createGetRecipesSuccessAction, createToggleFinishAction, createToggleIngredientAction, createToggleMethodAction } from '../../src/actions/recipe-actions';
import { IDoableItem } from '../../src/api/models/recipe';

describe('recipe actions', () => {
    it('getRecipesSuccess should create GET_RECIPES_SUCCESS action', () => {
        const recipes = [
            { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: <IDoableItem[]>[] }
        ];
        expect(createGetRecipesSuccessAction(recipes)).toEqual({
            type: actions.GET_RECIPES_SUCCESS,
            recipes
        });
    });

    it('createToggleFinishAction should create TOGGLE_RECIPE_FINISH action', () => {
        const index = 1;
        const recipe_id = 1;
        expect(createToggleFinishAction(recipe_id, index)).toEqual({
            type: actions.TOGGLE_RECIPE_FINISH,
            index,
            recipe_id
        });
    });

    it('createToggleIngredientAction should create TOGGLE_RECIPE_INGREDIENT action', () => {
        const index = 1;
        const recipe_id = 1;
        expect(createToggleIngredientAction(recipe_id, index)).toEqual({
            type: actions.TOGGLE_RECIPE_INGREDIENT,
            index,
            recipe_id
        });
    });

    it('createToggleMethodAction should create TOGGLE_RECIPE_METHOD action', () => {
        const index = 1;
        const recipe_id = 1;
        expect(createToggleMethodAction(recipe_id, index)).toEqual({
            type: actions.TOGGLE_RECIPE_METHOD,
            index,
            recipe_id
        });
    });
});
