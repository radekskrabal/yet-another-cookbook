import * as actions from '../actions/action-types';

export function createSetFilterAction(category_id: number, query: string, recipe_id: number) {
    return {
        type: actions.SET_FILTER,
        category_id,
        query,
        recipe_id
    };
}
