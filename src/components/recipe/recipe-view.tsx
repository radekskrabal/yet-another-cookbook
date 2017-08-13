import * as React from 'react';

import { IDoableItem, IRecipe } from '../../api/models/recipe';
import * as Http from '../../modules/http';

const generateIngredients = (ingredients: IDoableItem[], toggle: (position: number) => void): JSX.Element => {
    const items = ingredients.map((m, i) => <li className={m.done ? 'done' : ''} key={i} onClick={() => toggle(i) }>{m.text}</li>);
    return (
        <section className="ingredients">
            <h3>Ingredience</h3>
            <ul>
                {items}
            </ul>
        </section>
    );
};

const generateMethod = (method: IDoableItem[], toggle: (position: number) => void): JSX.Element => {
    const steps = method.map((m, i) => <li className={m.done ? 'done' : ''} key={i} onClick={() => toggle(i) }>{m.text}</li>);
    return (
        <section className="method">
            <h3>Postup</h3>
            <ol>
                {steps}
            </ol>
        </section>
    );
};

const generateFinish = (finish: IDoableItem[], toggle: (position: number) => void): JSX.Element => {
    const steps = finish.map((f, i) => <li className={f.done ? 'done' : ''} key={i} onClick={() => toggle(i)}>{f.text}</li>);
    return (
        <section className="finish">
            <h3>Servírování</h3>
            <ul>
                {steps}
            </ul>
        </section>
    );
};

export default function(props: { recipe: IRecipe, toggleIngredient: (position: number) => void, toggleMethod: (position: number) => void, toggleFinish: (position: number) => void }): JSX.Element {
    return (
        <article key={props.recipe.id} className="recipe">
            <img src={Http.buildUrl(`img/recipes/${props.recipe.id}.jpg`)} />
            <h2>{props.recipe.name}</h2>
            <em className="text-muted">{props.recipe.category}</em>
            <span className="servings">{props.recipe.servings} porce</span><br />
            <span className="time">{props.recipe.time} minut</span>
            { generateIngredients(props.recipe.ingredients, props.toggleIngredient) }
            { generateMethod(props.recipe.method, props.toggleMethod) }
            { generateFinish(props.recipe.finish, props.toggleFinish) }
        </article>
    );
}
