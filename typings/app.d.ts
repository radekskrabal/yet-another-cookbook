interface ICategoryState {
    categories: ICategory[];
}

interface IRecipeState {
    recipes: IRecipe[];
    filter: IRecipeFilterState;
    filterById: IRecipeFilterById;
}

// global filter
interface IRecipeFilterState {
    category_id: number;
    query: string;
    recipes: IRecipe[];
}

// recipe detail
interface IRecipeFilterById {
    recipe_id: number;
    recipe: IRecipe;
}

interface IStoreState {
    categoryState: ICategoryState;
    recipeState: IRecipeState;
}

/* JSON data */
interface ICategory {
    id: number;
    name: string;
}

interface IRecipe {
    id: number;
    category_id: number;
    category: string;
    name: string;
    servings: number;
    time: number;
    ingredients: string[];
    method: string[];
    finish?: string[];
    url?: string;
}