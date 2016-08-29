import * as React from 'react';

import DisplayTable from './DisplayTable';
import SearchBox from './SearchBox';
import * as Http from '../../modules/Http';

interface IInstantBoxState {
    categories: ICategory[];
    recipes: IRecipe[];
    query: string;
}

export default class InstantBox extends React.Component<{}, IInstantBoxState> {
    public constructor() {
        super();

        this.state = {
            categories: [],
            recipes: [],
            query: ''
        };
    }

    public render(): JSX.Element {
        let recipes: IRecipe[] = this.searchRecipes(this.state.query);

        return (
            <div className="InstantBox">
                <SearchBox query={this.state.query} setQuery={this.setQuery.bind(this)} />
                <DisplayTable categories={this.state.categories} recipes={recipes} query={this.state.query} />
            </div>
        );
    }

    public componentDidMount(): void {
        Promise.all([
            fetch('./data/categories.json').then(Http.parseJson),
            fetch('./data/recipes.json')
                .then(Http.parseJson)
                .then(this.sortRecipes)
        ]).then(values => {
            this.setState({
                categories: values[0],
                recipes: values[1],
                query: this.state.query
            });
        });
    }

    private setQuery(query: string): void {
        this.setState({
            categories: this.state.categories,
            recipes: this.state.recipes,
            query: query
        });
    }

    private searchRecipes(query: string = ''): IRecipe[] {
        let result: IRecipe[] = [];
        if (query !== '') {
            for (let recipe of this.state.recipes) {
                let { category, name } = recipe;

                if ([ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()))) {
                    result.push(recipe);
                }
            }
        } else {
            result = this.state.recipes;
        }

        return result;
    }

    private sortRecipes(recipes: IRecipe[]): IRecipe[] {
        let compareRecipes = (a: IRecipe, b: IRecipe): number => {
            if (a.category !== b.category) {
                return a.category > b.category ? -1 : 1;
            }

            return a.name > b.name ? 1 : -1;
        };

        return recipes.sort(compareRecipes);
    }
}

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