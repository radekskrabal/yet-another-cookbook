import {
    findRecipeById, recipeSorter, findRecipes, toggleFinish, toggleIngredient,
    toggleMethod, matchRecipe
} from '../../src/modules/recipe';

describe('recipe module', () => {
    const recipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara x', servings: 2, time: 30, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ] };
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
        it('should not find any recipes', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3 ], { category_id: null, query: 'no match', recipe_id: null })
            ).toEqual([]);
        });

        it('should find one recipe', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3 ], { category_id: null, query: 'vývar', recipe_id: null })
            ).toEqual([recipe3]);
        });

        it('should find multiple recipes', () => {
            expect(
                findRecipes([ recipe, recipe2, recipe3 ], { category_id: null, query: 'pasta', recipe_id: null })
            ).toEqual([ recipe, recipe2 ]);
        });
    });

    describe('matchRecipe', () => {
        it('should match recipe by category_id', () => {
            expect(
                matchRecipe(recipe3, 2, null)
            ).toBe(true)
        });

        it('should not match recipe by category_id', () => {
            expect(
                matchRecipe(recipe, 3, null)
            ).toBe(false)
        });

        it('should not match recipe by query', () => {
            expect(
                matchRecipe(recipe, null, 'no match')
            ).toBe(false)
        });

        it('should match recipe by query in name', () => {
            expect(
                matchRecipe(recipe3, null, 'vývar')
            ).toBe(true)
        });

        it('should match recipe by query in name & category_id', () => {
            expect(
                matchRecipe(recipe3, 2, 'vývar')
            ).toBe(true)
        });

        it('should not match recipe by query in name & !category_id', () => {
            expect(
                matchRecipe(recipe3, 3, 'vývar')
            ).toBe(false)
        });

        it('should not match recipe by !query in name & category_id', () => {
            expect(
                matchRecipe(recipe3, 2, 'no match')
            ).toBe(false)
        });

        it('should match recipe by query in category', () => {
            expect(
                matchRecipe(recipe3, null, 'polévka')
            ).toBe(true)
        });

        it('should match recipe by query in category & category_id', () => {
            expect(
                matchRecipe(recipe3, 2, 'polévka')
            ).toBe(true)
        });

        it('should not match recipe by query in category & !category_id', () => {
            expect(
                matchRecipe(recipe3, 3, 'polévka')
            ).toBe(false)
        });

        it('should not match recipe by !query in category & category_id', () => {
            expect(
                matchRecipe(recipe3, 2, 'no match')
            ).toBe(false)
        });
    });

    describe('toggleFinish', () => {
        it('should toggle first finish', () => {
            expect(
                toggleFinish(recipe, 0).finish[0].done
            ).toEqual(true);
        });
    });

    describe('toggleIngredient', () => {
        it('should toggle first ingredient', () => {
            expect(
                toggleIngredient(recipe, 0).ingredients[0].done
            ).toEqual(true);
        });
    });

    describe('toggleMethod', () => {
        it('should toggle first method', () => {
            expect(
                toggleMethod(recipe, 0).method[0].done
            ).toEqual(true);
        });
    });
});