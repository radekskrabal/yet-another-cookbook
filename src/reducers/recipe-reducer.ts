import * as actions from '../actions/action-types';

const initialRecipesState: IRecipeState = { recipes: [] };
const recipeReducer = (state: IRecipeState = initialRecipesState, action: any /* TODO: Typed */): IRecipeState => {
    switch(action.type) {
        case actions.GET_RECIPES_SUCCESS:
            return Object.assign({}, state, { recipes: action.recipes })
    }

    return state;
};

export default recipeReducer;