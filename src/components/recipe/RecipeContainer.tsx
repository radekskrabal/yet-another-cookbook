import * as React from 'react';
import { connect } from 'react-redux';

import RecipeView from './RecipeView';
import { createSetFilterAction } from '../../actions/filter-actions';
import { findRecipeById } from '../../modules/recipe';
import * as route from '../../modules/route';
import { recipeParam } from '../../router';

export interface IRecipeContainerProps {
    recipe: IRecipe;
    routeParams?: { recipeId: string }; // passed automatically
}

interface IDispatchProps extends ReactRedux.MapDispatchToPropsObject {
    setFilter: (action: any) => void;
}

class RecipeContainer extends React.Component<IRecipeContainerProps & IDispatchProps, {}> {
    public render(): JSX.Element {
        return (
            <RecipeView recipe={this.props.recipe} />
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);