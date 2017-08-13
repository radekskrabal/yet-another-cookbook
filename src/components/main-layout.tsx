import * as React from 'react';

import CategoriesContainer from './categories/categories-container';
import Footer from './footer';
import Header from './header';

export default function(props: any): JSX.Element {
    return (
        <div>
            <Header />
            <CategoriesContainer />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}
