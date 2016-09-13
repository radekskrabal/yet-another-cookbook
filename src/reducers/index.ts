import { combineReducers } from 'redux';

import categoryReducer from './category-reducer';
import queryReducer from './query-reducer';
import recipeReducer from './recipe-reducer';

const reducers = combineReducers({
    categoryState: categoryReducer,
    queryState: queryReducer,
    recipeState: recipeReducer
});

export default reducers;