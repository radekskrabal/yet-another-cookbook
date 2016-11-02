import * as React from 'react';
import { connect } from 'react-redux';

import RecipeView from './recipe-view';
import { createSetFilterAction } from '../../actions/filter-actions';
import { createToggleFinishAction, createToggleIngredientAction, createToggleMethodAction } from '../../actions/recipe-actions';
import { findRecipeById } from '../../modules/recipe';
import * as route from '../../modules/route';
import { recipeParam } from '../../router';

export interface IRecipeContainerProps {
    recipe: IRecipe;
    routeParams?: { recipeId: string }; // passed automatically
}

interface IDispatchProps extends ReactRedux.MapDispatchToPropsObject {
    setFilter: (action: any) => void;
    toggleFinish: (recipe_id: number, index: number) => void;
    toggleIngredient: (recipe_id: number, index: number) => void;
    toggleMethod: (recipe_id: number, index: number) => void;
}

class RecipeContainer extends React.Component<IRecipeContainerProps & IDispatchProps, {}> {
    public render(): JSX.Element {
        if (this.props.recipe === null) {
            return (
                <article />
            )
        }

        return (
            <RecipeView
                toggleFinish={(index: number) => this.props.toggleFinish(this.props.recipe.id, index)}
                toggleIngredient={(index: number) => this.props.toggleIngredient(this.props.recipe.id, index)}
                toggleMethod={(index: number) => this.props.toggleMethod(this.props.recipe.id, index)}
                recipe={this.props.recipe}
            />
        );
    }

    public componentDidMount(): void {
        this.props.setFilter(
            createSetFilterAction(null, null, route.parseNumberParam(recipeParam, this.props.routeParams))
        );
    }

    public componentDidUpdate(): void {
        const recipeId = route.parseNumberParam(recipeParam, this.props.routeParams);
        if (recipeId !== this.props.recipe.id) {
            this.props.setFilter(
                createSetFilterAction(null, null, recipeId)
            );
        }
    }
}

const mapStateToProps = (store: IStoreState): IRecipeContainerProps => {
    return {
        recipe: findRecipeById(store.filterState.recipe_id, store.recipeState.recipes)
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<void>) => {
    return {
        setFilter: (action: any): void => {
            dispatch(action);
        },
        toggleFinish: (recipe_id: number, index: number): void => {
            dispatch(createToggleFinishAction(recipe_id, index));
        },
        toggleIngredient: (recipe_id: number, index: number): void => {
            dispatch(createToggleIngredientAction(recipe_id, index));
        },
        toggleMethod: (recipe_id: number, index: number): void => {
            dispatch(createToggleMethodAction(recipe_id, index));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);