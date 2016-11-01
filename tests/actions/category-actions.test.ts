import * as actions from '../../src/actions/action-types';
import { getCategoriesSuccess } from '../../src/actions/category-actions';

describe('category actions', () => {
    it('getCategoriesSuccess should create GET_CATEGORIES_SUCCESS action', () => {
        const categories = [
            { id: 1, name: 'Pasta'}
        ];
        expect(getCategoriesSuccess(categories)).toEqual({
            type: actions.GET_CATEGORIES_SUCCESS,
            categories
        });
    });
});