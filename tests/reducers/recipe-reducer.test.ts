import * as actions from '../../src/actions/action-types';
import recipeReducer from '../../src/reducers/recipe-reducer';

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

    describe('TOGGLE_RECIPE_FINISH', () => {
        it('should toggle not done finish', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_FINISH,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: true } ]}
                    ]
                }
            );
        });

        it('should toggle done finish', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: true } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_FINISH,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }
            );
        });
    });

    describe('TOGGLE_RECIPE_INGREDIENT', () => {
        it('should toggle not done ingredient', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_INGREDIENT,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: true } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }
            );
        });

        it('should toggle not done ingredient', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: true } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_INGREDIENT,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }
            );
        });
    });

    describe('TOGGLE_RECIPE_METHOD', () => {
        it('should toggle not done ingredient', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_METHOD,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: true } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }
            );
        });

        it('should toggle not done ingredient', () => {
            expect(
                recipeReducer({
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: true } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }, {
                    type: actions.TOGGLE_RECIPE_METHOD,
                    index: 0,
                    recipe_id: 1
                })
            ).toEqual(
                {
                    recipes: [
                        {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 1, time: 15, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ]}
                    ]
                }
            );
        });
    });
});