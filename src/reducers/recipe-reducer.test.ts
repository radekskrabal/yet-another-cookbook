import * as actions from '../actions/action-types';
import recipeReducer from './recipe-reducer';

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

    it('should handle GET_RECIPES_SUCCESS for no recipes', () => {
        expect(
            recipeReducer({
                recipes: []
            }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: []
            })
        ).toEqual(
            {
                recipes: []
            }
        );
    });

    it('should handle GET_RECIPES_SUCCESS for new recipe', () => {
        expect(
            recipeReducer({
                recipes: []
            }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ]
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ]
            }
        );
    });

    it('should handle GET_RECIPES_SUCCESS for replaced recipes', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                ]
            }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ '4 egg yolks' ], method: [ 'Start boiling the water.' ]},
                    {id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro', servings: 1, time: 15, ingredients: [ '4 tomatoes' ], method: [ 'Start boiling the water.' ]}
                ]
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ '4 egg yolks' ], method: [ 'Start boiling the water.' ]},
                    {id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro', servings: 1, time: 15, ingredients: [ '4 tomatoes' ], method: [ 'Start boiling the water.' ]}
                ]
            }
        );
    });
});