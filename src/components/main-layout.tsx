import * as React from 'react';

import AppLink from './app-link';
import Footer from './footer';
import Header from './header';

export default function(props: any): JSX.Element {
    return (
        <div>
            <Header />
            <aside>
                <AppLink to="/">Home</AppLink>
                <AppLink to="/recipes/1">Recipe 1</AppLink>
            </aside>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}