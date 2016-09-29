import * as React from 'react';

import { IRecipeContainerProps } from './RecipeContainer';
import * as Http from "../../modules/http";

const generateIngredients = (ingredients: string[]): JSX.Element => {
    const items = ingredients.map(m => <li>{m}</li>);
    return (
        <section>
            <h3>Ingredience</h3>
            <ul>
                {items}
            </ul>
        </section>
    );
};

const generateMethod = (method: string[]): JSX.Element => {
    const steps = method.map(m => <li>{m}</li>);
    return (
        <section>
            <h3>Postup</h3>
            <ol>
                {steps}
            </ol>
        </section>
    );
};

const generateFinish = (finish: string[]): JSX.Element => {
    if (finish === undefined || finish.length === 0) {
        return;
    }

    const steps = finish.map(f => <li>{f}</li>);
    return (
        <section>
            <h3>Servírování</h3>
            <ul>
                {steps}
            </ul>
        </section>
    );
};

export default function(props: IRecipeContainerProps): JSX.Element {
    if (props.recipe === null) {
        return (
            <article />
        );
    }

    return (
        <article key={props.recipe_id} className="recipe">
            <img src={Http.buildUrl(`img/recipes/${props.recipe_id}.jpg`)} />
            <h2>{props.recipe.name}</h2>
            <em className="text-muted">{props.recipe.category}</em>
            <span className="servings">{props.recipe.servings} porce</span><br />
            <span className="time">{props.recipe.time} minut</span>
            { generateIngredients(props.recipe.ingredients) }
            { generateMethod(props.recipe.method) }
            { generateFinish(props.recipe.finish) }
        </article>
    );
}