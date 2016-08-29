import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';

import InstantBox from './components/instant-box/InstantBox';
import MainLayout from './components/MainLayout';

const rootEl = document.getElementById('react-app-container');
const browserHistory = useRouterHistory(createHistory)({
    basename: '/Playground/yet-another-cookbook/'
});
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={InstantBox} />
            <Route path="recipes/:recipeId" component={() => <p>Recipe 1!</p>} />
        </Route>
    </Router>
), rootEl);