import * as actions from '../../src/actions/action-types';
import filterReducer from '../../src/reducers/filter-reducer';

describe('filter reducer', () => {
    it('should handle initial state', () => {
        expect(
            filterReducer(undefined, {})
        ).toEqual(
            { category_id: null, query: null, recipe_id: null }
        );
    });

    it('should handle SET_FILTER for no filter', () => {
        expect(
            filterReducer(undefined, {
                type: actions.SET_FILTER,
                 category_id: null, query: null, recipe_id: null
            })
        ).toEqual(
            { category_id: null, query: null, recipe_id: null }
        );
    });

    it('should handle SET_FILTER for category_id', () => {
        expect(
            filterReducer(undefined, {
                type: actions.SET_FILTER,
                category_id: 1,
                query: null,
                recipe_id: null
            })
        ).toEqual(
            { category_id: 1, query: null, recipe_id: null }
        );
    });

    it('should handle SET_FILTER for category_id and query', () => {
        expect(
            filterReducer(undefined, {
                type: actions.SET_FILTER,
                category_id: 1,
                query: 'query',
                recipe_id: null
            })
        ).toEqual(
            { category_id: 1, query: 'query', recipe_id: null }
        );
    });

    it('should handle SET_FILTER for query', () => {
        expect(
            filterReducer(undefined, {
                type: actions.SET_FILTER,
                category_id: null,
                query: 'query',
                recipe_id: null
            })
        ).toEqual(
            { category_id: null, query: 'query', recipe_id: null }
        );
    });

    it('should handle SET_FILTER for recipe_id', () => {
        expect(
            filterReducer(undefined, {
                type: actions.SET_FILTER,
                category_id: null,
                query: null,
                recipe_id: 1
            })
        ).toEqual(
            { category_id: null, query: null, recipe_id: 1 }
        );
    });
});