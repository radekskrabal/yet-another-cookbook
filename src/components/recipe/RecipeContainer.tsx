import * as React from 'react';
import { connect } from 'react-redux';

import RecipeView from './RecipeView';
import store from '../../store';
import { displayRecipe } from "../../actions/recipe-actions";


export interface IRecipeContainerProps {
    recipe_id: number;
    recipe: IRecipe;
    routeParams?: { recipeId: string }; // passed automatically
}

class RecipeContainer extends React.Component<IRecipeContainerProps, {}> {
    public render(): JSX.Element {
        return (
            <RecipeView recipe_id={this.props.recipe_id} recipe={this.props.recipe} />
        );
    }

    public componentDidMount(): void {
        store.dispatch(displayRecipe(this.getCurrentPageId()));
    }

    public componentDidUpdate(): void {
        const currentPageId = this.getCurrentPageId();
        if (currentPageId !== this.props.recipe_id) {
            store.dispatch(displayRecipe(currentPageId));
        }
    }

    private getCurrentPageId(): number {
        return +this.props.routeParams.recipeId;
    }
}

const mapStateToProps = (store: IStoreState): IRecipeContainerProps => {
    return {
        recipe_id: store.recipeState.filterById.recipe_id,
        recipe: store.recipeState.filterById.recipe
    };
};

export default connect(mapStateToProps)(RecipeContainer);