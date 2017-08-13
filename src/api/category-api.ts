import { Dispatch } from 'react-redux';

import { ICategory } from './models/category';
import { getCategoriesSuccess } from '../actions/category-actions';
import * as Http from '../modules/http';

export function getCategories(dispatch: Dispatch<void>): void {
    fetch(Http.buildUrl('data/categories.json'))
        .then(Http.parseJson)
        .then((categories: ICategory[]) => {
            dispatch(getCategoriesSuccess(categories));
        });
}
