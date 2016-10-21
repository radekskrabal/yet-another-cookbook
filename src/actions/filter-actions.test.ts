import * as actions from './action-types';
import { createSetFilterAction } from './filter-actions';

it('searchRecipes should create SET_FILTER action', () => {
    const category_id: number = null;
    const query: string = null;
    const recipe_id: number = null;
    expect(createSetFilterAction(category_id, query, recipe_id)).toEqual({
        type: actions.SET_FILTER,
        category_id,
        query,
        recipe_id
    });
});