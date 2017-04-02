import * as actions from '../actions/action-types';

const initialRecipesState: IFilterState = { category_id: null, query: null, recipe_id: null };
const filterReducer = (state: IFilterState = initialRecipesState, action: any = {}): IFilterState => {
    switch (action.type) {
        case actions.SET_FILTER:
            const { category_id, query, recipe_id } = action;
            return Object.assign({}, state, { category_id, query, recipe_id });
    }

    return state;
};

export default filterReducer;