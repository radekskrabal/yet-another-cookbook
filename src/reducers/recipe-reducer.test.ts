import * as actions from '../actions/action-types'
import recipeReducer from './recipe-reducer'

describe('recipe reducer', () => {
    it('should handle initial state', () => {
        expect(
            recipeReducer(undefined, {})
        ).toEqual(
            {
                recipes: [],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }
        );
    });

    /* TODO: Mock window.fetch
    it('should handle DISPLAY_RECIPE', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filterState: {category_id: 0, recipe: null, query: ''}
            }, {
                type: actions.DISPLAY_RECIPE,
                recipeId: 1
            })
        ).toEqual(
            {}
        );
    });
     */

    it('should handle GET_RECIPES_SUCCESS for no recipes', () => {
        expect(
            recipeReducer({
                recipes: [],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: []
            })
        ).toEqual(
            {
                recipes: [],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }
        );
    });

    it('should handle GET_RECIPES_SUCCESS for new recipe', () => {
        expect(
            recipeReducer({
                recipes: [],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
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
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }
        );
    });

    it('should handle GET_RECIPES_SUCCESS for replaced recipes', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.GET_RECIPES_SUCCESS,
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'},
                    {id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro'}
                ]
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'},
                    {id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }
        );
    });

    /*
    it('should handle SEARCH_RECIPES for no query and no category', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: '', category_id: 0 }
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filterState: {category_id: 0, recipe: null, query: ''}
            }
        );
    });

    it('should handle SEARCH_RECIPES for no recipes', () => {
        expect(
            recipeReducer(undefined, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: '', category_id: 0 }
            })
        ).toEqual(
            {
                recipes: [],
                filterState: {category_id: 0, recipe: null, query: ''}
            }
        );
    });

    it('should handle SEARCH_RECIPES for query', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: 'Spaghetti', category_id: 0 }
            })
        ).toEqual(
            {
                recipes: [],
                filterState: {category_id: 0, recipe: null, query: 'Spaghetti'}
            }
        );
    });

    it('should handle SEARCH_RECIPES for not matching query', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: 'Potato', category_id: 0 }
            })
        ).toEqual(
            {
                recipes: [],
                filterState: {category_id: 0, recipe: null, query: 'Potato'}
            }
        );
    });

    it('should handle SEARCH_RECIPES for category', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: '', category_id: 1 }
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filterState: {category_id: 1, recipe: null, query: ''}
            }
        );
    });

    it('should handle SEARCH_RECIPES for not matching category', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: '', category_id: 2 }
            })
        ).toEqual(
            {
                recipes: [],
                filterState: {category_id: 2, recipe: null, query: ''}
            }
        );
    });

    it('should handle SEARCH_RECIPES for query and category', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                filterState: { query: 'Spaghetti', category_id: 1 }
            })
        ).toEqual(
            {
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filterState: {category_id: 1, recipe: null, query: 'Spaghetti'}
            }
        );
    });

    it('should handle SEARCH_RECIPES for not matching query and category', () => {
        expect(
            recipeReducer({
                recipes: [
                    {id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara'}
                ],
                filter: { category_id: null, query: null, recipes: [] },
                filterById: { recipe_id: null, recipe: null }
            }, {
                type: actions.SEARCH_RECIPES,
                query: 'Potato',
                category_id: 2
            })
        ).toEqual(
            {
                recipes: [],
                filterState: {category_id: 2, recipe: null, query: 'Potato'}
            }
        );
    });
    */
});