import { combineReducers } from 'redux';

import categoryReducer from './category-reducer';
import recipeReducer from './recipe-reducer';

const reducers = combineReducers({
    categoryState: categoryReducer,
    recipeState: recipeReducer
});

export default reducers;