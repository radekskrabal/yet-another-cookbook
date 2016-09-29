import * as React from 'react';

import { IRecipeContainerProps } from './RecipeContainer';

export default function(props: IRecipeContainerProps): JSX.Element {
    if (props.recipe === null) {
        return (
            <article />
        );
    }

    return (
        <article key={props.recipe_id}>
            <h2>{props.recipe.name}</h2>
            {props.recipe.category}
        </article>
    );
}