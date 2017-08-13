import * as actions from '../actions/action-types';
import { ICategory } from '../api/models/category';

export interface ICategoryState {
    categories: ICategory[];
}

const initialCategoriesState: ICategoryState = { categories: [] };
const categoryReducer = (state: ICategoryState = initialCategoriesState, action: any = {} /* TODO: Typed */): ICategoryState => {
    switch (action.type) {
        case actions.GET_CATEGORIES_SUCCESS:
            return Object.assign({}, state, { categories: action.categories });
    }

    return state;
};

export default categoryReducer;
