import * as actions from '../actions/action-types';

export interface IFilterState {
    category_id: number;
    query: string;
    recipe_id: number;
}

const initialState: IFilterState = { category_id: null, query: null, recipe_id: null };
const filterReducer = (state: IFilterState = initialState, action: any = {}): IFilterState => {
    switch (action.type) {
        case actions.SET_FILTER:
            const { category_id, query, recipe_id } = action;
            return Object.assign({}, state, { category_id, query, recipe_id });
    }

    return state;
};

export default filterReducer;
