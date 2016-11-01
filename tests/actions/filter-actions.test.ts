import * as actions from '../../src/actions/action-types';
import { createSetFilterAction } from '../../src/actions/filter-actions';

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