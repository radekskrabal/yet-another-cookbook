import * as React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import { buildUrl } from './modules/http';
import MainLayout from './components/main-layout';
import RecipeContainer from './components/recipe/RecipeContainer';
import RecipesContainer from './components/recipes/RecipesContainer';

const browserHistory = useRouterHistory(createHistory)({
    basename: buildUrl()
});

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={RecipesContainer} />

            <Route path="recipes">
                <Route path=":recipeId" component={RecipeContainer} />
            </Route>

            <Route path="categories">
                <Route path=":categoryId/recipes" component={RecipesContainer} />
            </Route>
        </Route>
    </Router>
);
