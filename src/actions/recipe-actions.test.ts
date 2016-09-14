import * as actions from './action-types'
import { getRecipeSuccess, getRecipesSuccess, searchRecipes } from './recipe-actions'

describe('recipe actions', () => {
    it('getRecipeSuccess should create GET_RECIPE_SUCCESS action', () => {
        const recipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' };
        expect(getRecipeSuccess(recipe)).toEqual({
            type: actions.GET_RECIPE_SUCCESS,
            recipe
        });
    });

    it('getRecipesSuccess should create GET_RECIPES_SUCCESS action', () => {
        const recipes = [
            { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' }
        ];
        expect(getRecipesSuccess(recipes)).toEqual({
            type: actions.GET_RECIPES_SUCCESS,
            recipes
        });
    });

    it('searchRecipes should create SEARCH_RECIPES action', () => {
        const query = '';
        expect(searchRecipes(query)).toEqual({
            type: actions.SEARCH_RECIPES,
            query
        });
    });
});