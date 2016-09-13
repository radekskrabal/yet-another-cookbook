import * as React from 'react';
import * as Text from '../../modules/Text';
import AppLink from '../app-link';

interface IDisplayTableProps {
    categories: ICategory[];
    recipes: IRecipe[];
    query: string;
}

export default class DisplayTable extends React.Component<IDisplayTableProps, {}> {
    public render(): JSX.Element {
        let rows: JSX.Element[] = [];
        for (let { id, category, name } of this.props.recipes) {
            // TODO: Refactor into row component
            rows.push(
                <tr key={id}>
                    <td>{id}</td>
                    <td>
                        <AppLink dangerouslySetInnerHTML={{ __html: Text.decorate(name, this.props.query) }} to={'/recipes/' + id} />
                    </td>
                    <td dangerouslySetInnerHTML={{ __html: Text.decorate(category, this.props.query) }} />
                </tr>
            );
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}