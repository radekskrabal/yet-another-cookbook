import store from '../store';
import { getCategoriesSuccess } from '../actions/category-actions';
import * as Http from '../modules/http';

export function getCategories(): void {
    fetch(Http.buildUrl('data/categories.json'))
        .then(Http.parseJson)
        .then((categories: ICategory[]) => {
            store.dispatch(getCategoriesSuccess(categories));
        });
}