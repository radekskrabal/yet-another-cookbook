import * as React from 'react';
import * as Http from '../../modules/http';
import * as Text from '../../modules/text';
import AppLink from '../app-link';

interface IDisplayTableProps {
    recipes: IRecipe[];
    query: string;
}

export default function (props: IDisplayTableProps): JSX.Element {
    let recipes = props.recipes.map(recipe => {
        let { id, category, name } = recipe;

        // TODO: Refactor into row component
        return (
            <article key={id}>
                <img src={Http.buildUrl(`img/recipes/${id}.jpg`)} />
                <AppLink dangerouslySetInnerHTML={{ __html: Text.decorate(name, props.query) }} to={'/recipes/' + id} />
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