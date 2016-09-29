import * as React from 'react';
import { connect } from 'react-redux';

import DisplayTable from './DisplayTable';
import SearchBox from './SearchBox';
import AppLink from '../app-link';
import store from '../../store';
import * as recipeApi from '../../api/recipe-api';
import { searchRecipes } from "../../actions/recipe-actions";

interface IRecipesContainerProps {
    recipes: IRecipe[];
    query: string;
    category_id: number;
    routeParams?: { categoryId: string }; // passed automatically
}

class RecipesContainer extends React.Component<IRecipesContainerProps, {}> {
    public render(): JSX.Element {
        if (this.props.recipes.length === 0) {
            if (this.canToggleAllRecipes(this.props.category_id, this.props.query)) {
                return (
                    <div>
                        <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                        <div>No recipes found matching '{this.props.query}'. Try to search <AppLink to="/">All Recipes</AppLink>?</div>
                    </div>
                );
            }

            return (
                <div>
                    <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                </div>
            );
        }

        return (
            <div>
                <SearchBox query={this.props.query} setQuery={this.setQuery.bind(this)} />
                <DisplayTable recipes={this.props.recipes} query={this.props.query} />
            </div>
        );
    }

    public componentDidMount(): void {
        recipeApi.getRecipes().then(this.setQuery.bind(this));
    }

    public componentDidUpdate(): void {
        const categoryId = this.getCategoryId();

        if (categoryId !== this.props.category_id) {
            store.dispatch(searchRecipes(this.props.query, categoryId));
        }
    }

    private canToggleAllRecipes(category_id: number, query: string): boolean {
        return category_id !== null && query !== null;
    }

    private setQuery(query: string = null): void {
        store.dispatch(searchRecipes(query, this.props.category_id));
    }

    private getCategoryId(): number {
        return +this.props.routeParams.categoryId || null; // +undefined = NaN
    }
}

const mapStateToProps = (store: IStoreState): IRecipesContainerProps => {
    return {
        recipes: store.recipeState.filter.recipes,
        query: store.recipeState.filter.query,
        category_id: store.recipeState.filter.category_id
    };
};

export default connect(mapStateToProps)(RecipesContainer);

// TODO: Use nice Bootstrap search field
/* return (
    <div className="input-group col-md-4">
        <form className="navbar-form" role="search">
            <input type="text" className="form-control input-lg" placeholder="Search all recipes" />
            <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
        </form>
    </div>
); */