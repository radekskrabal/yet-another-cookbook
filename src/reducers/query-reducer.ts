import * as actions from '../actions/action-types';

const initialQueryState: IQueryState = { query: '' };
const queryReducer = (state: IQueryState = initialQueryState, action: any /* TODO: Typed */): IQueryState => {
    switch(action.type) {
        case actions.SEARCH_RECIPES:
            return Object.assign({}, state, { query: action.query })
    }

    return state;
};

export default queryReducer;
