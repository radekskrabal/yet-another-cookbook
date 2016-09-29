import * as React from 'react';

import Category from './category';
import AppLink from '../app-link';

export default function(props: { categories: ICategory[] }): JSX.Element {
    let links = props.categories.map(category => {
        return (
            <Category category={category} />
        );
    });
    return (
        <aside>
            <AppLink to="/">All Recipes</AppLink>
            {links}
        </aside>
    );
}