import * as actions from '../actions/action-types'
import recipeReducer from './recipe-reducer'

describe('recipe reducer', () => {
    it('should handle initial state', () => {
        expect(
            recipeReducer(undefined, {})
        ).toEqual(
            {
                recipes: []
            }
        );
    });

    it('should handle GET_RECIPES_SUCCESS', () => {
        expect(
            recipeReducer({ recipes: [] }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: []
            })
        ).toEqual(
            {
                recipes: []
            }
        );

        expect(
            recipeReducer({ recipes: [] }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' }
                ]
            })
        ).toEqual(
            {
                recipes: [
                    { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' }
                ]
            }
        );

        expect(
            recipeReducer({ recipes: [
                { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' }
            ] }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' },
                    { id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro' }
                ]
            })
        ).toEqual(
            {
                recipes: [
                    { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' },
                    { id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro' }
                ]
            }
        );

        expect(
            recipeReducer({ recipes: [
                { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara' }
            ] }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    { id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro' }
                ]
            })
        ).toEqual(
            {
                recipes: [
                    { id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro' }
                ]
            }
        );
    });
});