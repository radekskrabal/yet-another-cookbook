import * as React from 'react';

import Category from './category';
import AppLink from '../app-link';
import { ICategory } from '../../api/models/category';

export default function(props: { categories: ICategory[] }): JSX.Element {
    const links = props.categories.map(category => {
        return (
            <Category key={category.id} category={category} />
        );
    });
    return (
        <aside className="text-center">
            <AppLink to="/">Vše</AppLink>
            {links}
        </aside>
    );
}
