import * as React from 'react';
import * as Text from '../../modules/Text';
import AppLink from '../app-link';

interface IDisplayTableProps {
    recipes: IRecipe[];
    query: string;
}

export default function (props: IDisplayTableProps): JSX.Element {
    let rows = props.recipes.map(recipe => {
        let { id, category, name } = recipe;

        // TODO: Refactor into row component
        return (
            <tr key={id}>
                <td>
                    <AppLink dangerouslySetInnerHTML={{ __html: Text.decorate(name, props.query) }} to={'/recipes/' + id} />
                </td>
                <td dangerouslySetInnerHTML={{ __html: Text.decorate(category, props.query) }} />
            </tr>
        );
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}