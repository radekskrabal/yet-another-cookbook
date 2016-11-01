import * as actions from '../../src/actions/action-types';
import categoryReducer from '../../src/reducers/category-reducer';

describe('category reducer', () => {
    it('should handle initial state', () => {
        expect(
            categoryReducer(undefined, {})
        ).toEqual(
            {
                categories: []
            }
        );
    });

    it('should handle GET_CATEGORIES_SUCCESS', () => {
        expect(
            categoryReducer({ categories: [] }, {
                type: actions.GET_CATEGORIES_SUCCESS,
                categories: []
            })
        ).toEqual(
            {
                categories: []
            }
        );

        expect(
            categoryReducer({ categories: [] }, {
                type: actions.GET_CATEGORIES_SUCCESS,
                categories: [
                    { id: 1, name: 'Pasta' }
                ]
            })
        ).toEqual(
            {
                categories: [
                    { id: 1, name: 'Pasta' }
                ]
            }
        );

        expect(
            categoryReducer({ categories: [
                { id: 1, name: 'Pasta' }
            ] }, {
                type: actions.GET_CATEGORIES_SUCCESS,
                categories: [
                    { id: 1, name: 'Pasta' },
                    { id: 2, name: 'Desserts' }
                ]
            })
        ).toEqual(
            {
                categories: [
                    { id: 1, name: 'Pasta' },
                    { id: 2, name: 'Desserts' }
                ]
            }
        );

        expect(
            categoryReducer({ categories: [
                { id: 1, name: 'Pasta' }
            ] }, {
                type: actions.GET_CATEGORIES_SUCCESS,
                categories: [
                    { id: 2, name: 'Desserts' }
                ]
            })
        ).toEqual(
            {
                categories: [
                    { id: 2, name: 'Desserts' }
                ]
            }
        );
    });
});