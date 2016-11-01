import {findRecipeById, recipeSorter, findRecipes} from '../../src/modules/recipe';

describe('recipe module', () => {
    const recipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 2, time: 30, ingredients: <IDoableItem[]>[], method: <IDoableItem[]>[], finish: <IDoableItem[]>[] };
    const recipe2 = { id: 2, category_id: 1, category: 'Pasta', name: 'Spaghetti Pomodoro', servings: 2, time: 30, ingredients: <IDoableItem[]>[], method: <IDoableItem[]>[], finish: <IDoableItem[]>[] };
    const recipe3 = { id: 3, category_id: 2, category: 'Polévka', name: 'Zeleninový vývar', servings: 6, time: 200, ingredients: <IDoableItem[]>[], method: <IDoableItem[]>[], finish: <IDoableItem[]>[] };

    describe('findRecipeById', () => {
        it('should not find recipe in empty recipes', () => {
            expect(
                findRecipeById(1, [])
            ).toEqual(
                null
            );
        });

        it('should not find recipe', () => {
            expect(
                findRecipeById(2, [ recipe ])
            ).toEqual(
                null
            );
        });

        it('should find recipe', () => {
            expect(
                findRecipeById(1, [ recipe ])
            ).toEqual(
                recipe
            );
        });
    });

    describe('recipeSorter', () => {
        it('should sort recipes by name', () => {
            expect(
                recipeSorter(recipe2, recipe)
            ).toEqual(
                1
            );
        });

        it('should preserve recipes sort by name', () => {
            expect(
                recipeSorter(recipe, recipe2)
            ).toEqual(
                -1
            );
        });

        it('should sort recipes by category', () => {
            expect(
                recipeSorter(recipe3, recipe)
            ).toEqual(
                1
            );
        });

        it('should preserve recipes by category', () => {
            expect(
                recipeSorter(recipe, recipe3)
            ).toEqual(
                -1
            );
        });
    });

    describe('findRecipes', () => {
        it('should not find recipes by category_id', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 3, query: null, recipe_id: null })
            ).toEqual(
                []
            )
        });

        it('should find one recipe by category_id', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 2, query: null, recipe_id: null })
            ).toEqual(
                [ recipe3 ]
            )
        });

        it('should find multiple recipes by category_id', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 1, query: null, recipe_id: null })
            ).toEqual(
                [ recipe, recipe2 ]
            )
        });

        it('should not find recipes by query', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: null, query: 'no match', recipe_id: null })
            ).toEqual(
                []
            )
        });

        it('should find one recipe by query in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: null, query: 'vývar', recipe_id: null })
            ).toEqual(
                [ recipe3 ]
            )
        });

        it('should find one recipe by query & category_id in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 2, query: 'vývar', recipe_id: null })
            ).toEqual(
                [ recipe3 ]
            )
        });

        it('should not find recipe by !query & category_id in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 2, query: 'no match', recipe_id: null })
            ).toEqual([])
        });

        it('should not find recipe by query & !category_id in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 3, query: 'vývar', recipe_id: null })
            ).toEqual([])
        });

        it('should find multiple recipes by query in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: null, query: 'Spaghetti', recipe_id: null })
            ).toEqual(
                [ recipe, recipe2 ]
            )
        });

        it('should find multiple recipes & category_id by query in name', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 1, query: 'Spaghetti', recipe_id: null })
            ).toEqual(
                [ recipe, recipe2 ]
            )
        });

        it('should find one recipe by query in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: null, query: 'polévka', recipe_id: null })
            ).toEqual(
                [ recipe3 ]
            )
        });

        it('should find one recipe by query & category_id in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 2, query: 'polévka', recipe_id: null })
            ).toEqual(
                [ recipe3 ]
            )
        });

        it('should not find recipe by !query & category_id in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 2, query: 'no match', recipe_id: null })
            ).toEqual([])
        });

        it('should not find recipe by query & !category_id in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 3, query: 'polévka', recipe_id: null })
            ).toEqual([])
        });

        it('should find multiple recipes by query in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: null, query: 'p', recipe_id: null })
            ).toEqual(
                [ recipe, recipe2, recipe3 ]
            )
        });

        it('should find multiple recipes by query & category_id in category', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3], { category_id: 1, query: 'p', recipe_id: null })
            ).toEqual(
                [ recipe, recipe2 ]
            )
        });
    });

    /*
    describe('matchRecipe', () => {

    });
     */
});