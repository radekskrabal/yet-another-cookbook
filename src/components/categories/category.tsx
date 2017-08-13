import * as React from 'react';

import AppLink from '../app-link';
import { ICategory } from '../../api/models/category';

export default function(props: { category: ICategory }): JSX.Element {
    const { id, name } = props.category;

    return (
        <AppLink to={`/categories/${id}/recipes`} dangerouslySetInnerHTML={{ __html: name }} />
    );
}
