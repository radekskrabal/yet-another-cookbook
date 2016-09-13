import * as React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import MainLayout from './components/main-layout';
import RecipesContainer from './components/recipes/RecipesContainer';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/Playground/yet-another-cookbook/'
});

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={RecipesContainer} />

            <Route path="recipes">
                <Route path=":recipeId" component={() => <p>Recipe 1!</p>} />
            </Route>
        </Route>
    </Router>
);