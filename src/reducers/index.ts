import { combineReducers } from 'redux';

import categoryReducer from './category-reducer';
import filterReducer from './filter-reducer';
import recipeReducer from './recipe-reducer';

const reducers = combineReducers({
    categoryState: categoryReducer,
    filterState: filterReducer,
    recipeState: recipeReducer
});

export default reducers;