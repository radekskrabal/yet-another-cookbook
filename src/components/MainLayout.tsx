import * as React from 'react';
import { withRouter } from 'react-router';

import AppLink from './AppLink';
import Footer from './Footer';
import Header from './Header';

const title = 'Yet Another Infor Grid';
class MainLayout extends React.Component <{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <Header title={title} />
                <AppLink to="/">Home</AppLink>
                <AppLink to="/recipes/1">Recipe 1</AppLink>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

export default withRouter(MainLayout);