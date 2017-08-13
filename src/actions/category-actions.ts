import * as actions from '../actions/action-types';

import { ICategory } from '../api/models/category';

export function getCategoriesSuccess(categories: ICategory[]) {
    return {
        type: actions.GET_CATEGORIES_SUCCESS,
        categories
    };
}
