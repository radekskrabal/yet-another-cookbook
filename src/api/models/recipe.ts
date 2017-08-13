import { IFilterState } from '../../reducers/index';

export interface IRecipe {
    id: number;
    category_id: number;
    category: string;
    name: string;
    servings: number;
    time: number;
    ingredients: IDoableItem[];
    method: IDoableItem[];
    finish: IDoableItem[];
    url?: string;
}

export interface IDoableItem {
    text: string;
    done: boolean;
}

export function findRecipeById(id: number, recipes: IRecipe[]): IRecipe {
    return recipes.find(r => r.id === id) || null;
}

export function decorateRecipes(recipes: any[]): IRecipe[] { // TODO: Test
    return recipes.map(r => {
        r.ingredients = r.ingredients.map((i: string) => makeDoable(i));
        r.method = r.method.map((i: string) => makeDoable(i));
        r.finish = r.finish.map((i: string) => makeDoable(i));

        return r;
    });
}

export function makeDoable(text: string): IDoableItem { // TODO: Test
    return {
        text,
        done: false
    };
}

export function sortRecipes(recipes: IRecipe[]): IRecipe[] { // TODO: Test
    return recipes.sort(recipeSorter);
}

export function recipeSorter(a: IRecipe, b: IRecipe): number {
    if (a.category !== b.category) {
        return a.category > b.category ? 1 : -1;
    }

    return a.name > b.name ? 1 : -1;
}

export function findRecipes(recipes: IRecipe[], filter: IFilterState): IRecipe[] {
    return recipes.filter(r => matchRecipe(r, filter.category_id, filter.query));
}

export function matchRecipe(recipe: IRecipe, category_id: number, query: string): boolean {
    if (category_id !== null && recipe.category_id !== category_id) {
        return false;
    }

    if (query === null) {
        return true;
    }

    const { category, name } = recipe;
    return [ category, name ].some(str => str.toLowerCase().includes(query.toLowerCase()));
}

export function toggleFinish(recipe: IRecipe, index: number): IRecipe {
    const toggled = Object.assign({}, recipe);
    toggled.finish[index].done = !toggled.finish[index].done;

    return toggled;
}

export function toggleIngredient(recipe: IRecipe, index: number): IRecipe {
    const toggled = Object.assign({}, recipe);
    toggled.ingredients[index]['done'] = !toggled.ingredients[index]['done'];

    return toggled;
}

export function toggleMethod(recipe: IRecipe, index: number): IRecipe {
    const toggled = Object.assign({}, recipe);
    toggled.method[index]['done'] = !toggled.method[index]['done'];

    return toggled;
}
