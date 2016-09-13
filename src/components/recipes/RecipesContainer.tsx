import * as React from 'react';
import { connect } from 'react-redux';

import DisplayTable from './DisplayTable';
import SearchBox from './SearchBox';
import store from '../../store';
import * as categoryApi from '../../api/category-api';
import * as recipeApi from '../../api/recipe-api';
import { searchRecipes } from "../../actions/recipe-actions";

interface ISearchContainerProps {
    categories: ICategory[];
    recipes: IRecipe[];
    query: string;
}

class SearchContainer extends React.Component<ISearchContainerProps, {}> {
    public render(): JSX.Element {
        let recipes: IRecipe[] = this.searchRecipes(this.props.query);

        return (
            <div className="InstantBox">
                <SearchBox query={this.props.query} setQuery={this.setQuery} />
                <DisplayTable categories={this.props.categories} recipes={recipes} query={this.props.query} />
            </div>
        );
    }

    public componentDidMount(): void {
        categoryApi.getCategories();
        recipeApi.getRecipes();
    }

    private setQuery(query: string): void {
        store.dispatch(searchRecipes(query));
    }

    private searchRecipes(query: string = ''): IRecipe[] {
        let result: IRecipe[] = [];
        if (query !== '') {
            for (let recipe of this.props.recipes) {
                let { category, name } = recipe;

                if ([ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()))) {
                    result.push(recipe);
                }
            }
        } else {
            result = this.props.recipes;
        }

        return result;
    }
}

const mapStateToProps = (store: IStoreState): ISearchContainerProps => {
    return {
        categories: store.categoryState.categories,
        recipes: store.recipeState.recipes,
        query: store.queryState.query
    };
};

export default connect(mapStateToProps)(SearchContainer);

// Bootstrap
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