import * as React from 'react';
import { connect } from 'react-redux';

import DisplayTable from './DisplayTable';
import SearchBox from './SearchBox';
import AppLink from '../app-link';
import * as recipeApi from '../../api/recipe-api';
import { createSetFilterAction } from '../../actions/recipe-actions';

interface IRecipesContainerProps {
    recipes: IRecipe[];
    query: string;
    category_id: number;

    routeParams?: { categoryId: string }; // passed automatically
}

interface IDispatchProps extends ReactRedux.MapDispatchToPropsObject {
    setFilter: (action: any) => void;
}

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
        recipeApi.getRecipes().then(this.setQuery.bind(this));
    }

    public componentDidUpdate(): void {
        const categoryId = this.parseCategoryId();

        if (categoryId !== this.props.category_id) {
            this.props.setFilter(createSetFilterAction(this.props.query, categoryId));
        }
    }

    private setQuery(query: string = null): void {
        this.props.setFilter(createSetFilterAction(query, this.props.category_id));
    }

    private parseCategoryId(): number {
        return +this.props.routeParams.categoryId || null; // +undefined = NaN
    }
}

const searchRecipes = (recipes: IRecipe[], filter: IRecipeFilter): IRecipe[] => {
    return recipes.filter(r => matchRecipe(r, filter.category_id, filter.query));
};

const matchRecipe = (recipe: IRecipe, category_id: number, query: string): boolean => {
    if (category_id !== null && recipe.category_id !== category_id) {
        return false;
    }

    if (query === null) {
        return true;
    }

    let { category, name } = recipe;
    return [ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()))
};

const canToggleAllRecipes = (category_id: number, query: string): boolean => {
    return category_id !== null && query !== null;
};

const mapStateToProps = (store: IStoreState): IRecipesContainerProps => {
    return {
        recipes: searchRecipes(
            store.recipeState.recipes,
            store.recipeState.filter
        ),
        query: store.recipeState.filter.query,
        category_id: store.recipeState.filter.category_id
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<void>): IDispatchProps => {
    return {
        setFilter: (action: any): void => { dispatch(action); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);