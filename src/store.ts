import { createStore } from 'redux';
import reducers, { ICategoryState, IFilterState, IRecipeState } from './reducers/index';

export interface IState {
    categoryState: ICategoryState;
    recipeState: IRecipeState;
    filterState: IFilterState;
}

export default () => {
    return createStore(reducers);
};
