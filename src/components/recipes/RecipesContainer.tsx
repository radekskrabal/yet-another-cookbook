import * as React from 'react';
import { connect, Dispatch, MapDispatchToPropsObject } from 'react-redux';

import DisplayTable from './DisplayTable';
import SearchBox from './SearchBox';
import AppLink from '../app-link';
import * as recipeApi from '../../api/recipe-api';
import { findRecipes, IRecipe } from '../../api/models/recipe';
import { createSetFilterAction } from '../../actions/filter-actions';
import * as route from '../../modules/route';
import { categoryParam } from '../../router';
import { IState } from '../../store';

interface IRecipesContainerProps {
    recipes: IRecipe[];
    query: string;
    category_id: number;

    routeParams?: { categoryId: string }; // passed automatically
}

interface IDispatchProps extends MapDispatchToPropsObject {
    dispatch: Dispatch<void>;
    setFilter: (action: any) => void;
}

const canToggleAllRecipes = (category_id: number, query: string): boolean => {
    return category_id !== null && query !== null;
};

class RecipesContainer extends React.Component<IRecipesContainerProps & IDispatchProps, {}> {
    public render(): JSX.Element {
        if (this.props.recipes.length === 0) {
            if (canToggleAllRecipes(this.props.category_id, this.props.query)) {
                return (
                    <div className="text-center">
                        <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                        <div>No recipes found matching '{this.props.query}'. Try to search <AppLink to="/">All Recipes</AppLink>?</div>
                    </div>
                );
            }

            return (
                <div className="text-center">
                    <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                </div>
            );
        }

        return (
            <div className="text-center">
                <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                <DisplayTable recipes={this.props.recipes} query={this.props.query} />
            </div>
        );
    }

    public componentDidMount(): void {
        recipeApi.getRecipes(this.props.dispatch).then(this.setQuery.bind(this));
    }

    public componentDidUpdate(): void {
        const categoryId = route.parseNumberParam(categoryParam, this.props.routeParams);

        if (categoryId !== this.props.category_id) {
            this.props.setFilter(createSetFilterAction(categoryId, this.props.query, null));
        }
    }

    private setQuery(query: string = null): void {
        this.props.setFilter(
            createSetFilterAction(this.props.category_id, query, null)
        );
    }
}

const mapStateToProps = (store: IState): IRecipesContainerProps => {
    return {
        recipes: findRecipes(
            store.recipeState.recipes,
            store.filterState
        ),
        query: store.filterState.query,
        category_id: store.filterState.category_id
    };
};

const mapDispatchToProps = (dispatch: Dispatch<void>): IDispatchProps => {
    return {
        dispatch,
        setFilter: (action: any): void => { dispatch(action); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
