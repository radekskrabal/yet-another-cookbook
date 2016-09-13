import * as actions from '../actions/action-types';

export function getCategoriesSuccess(categories: ICategory[]) {
    return {
        type: actions.GET_CATEGORIES_SUCCESS,
        categories
    };
}