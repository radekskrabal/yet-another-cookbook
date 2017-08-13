import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/main-layout';
import RecipeContainer from './components/recipe/recipe-container';
import RecipesContainer from './components/recipes/RecipesContainer';

export const categoryParam = 'categoryId';
export const recipeParam = 'recipeId';

export default (
    <BrowserRouter>
        <Route render={props => <MainLayout {...props} />}>
            <Route path="" render={props => <RecipesContainer {...props} />} />

            <Route path="recipes">
                <Route path={`:${recipeParam}`} component={RecipeContainer} />
            </Route>

            <Route path="categories">
                <Route path={`:${categoryParam}/recipes`} component={RecipesContainer} />
            </Route>
        </Route>
    </BrowserRouter>
);
