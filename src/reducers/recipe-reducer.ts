import * as actions from '../actions/action-types';
import {findRecipeById, toggleFinish, toggleIngredient, toggleMethod, IRecipe } from '../api/models/recipe';

export interface IRecipeState {
    recipes: IRecipe[];
}

const initialState: IRecipeState = {
    recipes: []
};
const recipeReducer = (state: IRecipeState = initialState, action: any = {}): IRecipeState => {
    switch (action.type) {
        case actions.GET_RECIPES_SUCCESS:
            return Object.assign({}, state, { recipes: action.recipes });
        case actions.TOGGLE_RECIPE_FINISH:
            return Object.assign({}, state, {
                recipes: state.recipes.map(r => {
                    if (r.id === action.recipe_id) {
                        return toggleFinish(findRecipeById(action.recipe_id, state.recipes), action.index);
                    }

                    return r;
                })
            });
        case actions.TOGGLE_RECIPE_INGREDIENT:
            return Object.assign({}, state, {
                recipes: state.recipes.map(r => {
                    if (r.id === action.recipe_id) {
                        return toggleIngredient(findRecipeById(action.recipe_id, state.recipes), action.index);
                    }

                    return r;
                })
            });
        case actions.TOGGLE_RECIPE_METHOD:
            return Object.assign({}, state, {
                recipes: state.recipes.map(r => {
                    if (r.id === action.recipe_id) {
                        return toggleMethod(findRecipeById(action.recipe_id, state.recipes), action.index);
                    }

                    return r;
                })
            });
    }

    return state;
};

export default recipeReducer;
