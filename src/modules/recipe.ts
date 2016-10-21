export function findRecipeById(id: number, recipes: IRecipe[]): IRecipe {
    return recipes.find(r => r.id === id) || null;
};

export function sortRecipes(a: IRecipe, b: IRecipe): number {
    if (a.category !== b.category) {
        return a.category > b.category ? 1 : -1;
    }

    return a.name > b.name ? 1 : -1;
}

export function findRecipes(recipes: IRecipe[], filter: IFilterState): IRecipe[] {
    return recipes.filter(r => matchRecipe(r, filter.category_id, filter.query));
};

export function matchRecipe(recipe: IRecipe, category_id: number, query: string): boolean {
    if (category_id !== null && recipe.category_id !== category_id) {
        return false;
    }

    if (query === null) {
        return true;
    }

    let { category, name } = recipe;
    return [ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()))
};