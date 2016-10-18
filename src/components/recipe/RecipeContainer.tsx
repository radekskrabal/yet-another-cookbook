import * as React from 'react';
import { connect } from 'react-redux';

import RecipeView from './RecipeView';
import { createDisplayRecipeAction } from "../../actions/recipe-actions";


export interface IRecipeContainerProps {
    recipe: IRecipe;
    routeParams?: { recipeId: string }; // passed automatically
}

interface IDispatchProps extends ReactRedux.MapDispatchToPropsObject {
    displayRecipe: (action: any) => void;
}

class RecipeContainer extends React.Component<IRecipeContainerProps & IDispatchProps, {}> {
    public render(): JSX.Element {
        return (
            <RecipeView recipe={this.props.recipe} />
        );
    }

    public componentDidMount(): void {
        this.props.displayRecipe(
            createDisplayRecipeAction(this.parseRecipeId())
        );
    }

    public componentDidUpdate(): void {
        const recipeId = this.parseRecipeId();
        if (recipeId !== this.props.recipe.id) {
            this.props.displayRecipe(
              createDisplayRecipeAction(recipeId)
            );
        }
    }

    private parseRecipeId(): number {
        return +this.props.routeParams.recipeId;
    }
}

const mapStateToProps = (store: IStoreState): IRecipeContainerProps => {
    return {
        recipe: store.recipeState.recipe
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<void>) => {
    return {
        displayRecipe: (action: any): void => {
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);