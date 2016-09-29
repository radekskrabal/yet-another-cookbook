import * as React from 'react';
import AppLink from '../app-link';

export default function(props: { category: ICategory }): JSX.Element {
    let { id, name } = props.category;

    return (
        <AppLink to={`/categories/${id}/recipes`}>{name}</AppLink>
    );
}