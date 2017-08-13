import * as React from 'react';

import AppLink from '../app-link';
import { IRecipe } from '../../api/models/recipe';
import * as Http from '../../modules/http';
import * as Text from '../../modules/text';

interface IDisplayTableProps {
    recipes: IRecipe[];
    query: string;
}

export default function (props: IDisplayTableProps): JSX.Element {
    const recipes = props.recipes.map(recipe => {
        const { id, category, name } = recipe;

        // TODO: Refactor into row component
        return (
            <article key={id}>
                <AppLink to={'/recipes/' + id}>
                    <img src={Http.buildUrl(`img/recipes/${id}.jpg`)} />
                    <h2 dangerouslySetInnerHTML={{ __html: Text.decorate(name, props.query) }} />
                </AppLink>
                <em className="text-muted" dangerouslySetInnerHTML={{ __html: Text.decorate(category, props.query) }} />
            </article>
        );
    });

    return (
        <section>
            {recipes}
        </section>
    );
}
