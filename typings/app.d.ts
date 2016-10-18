interface ICategoryState {
    categories: ICategory[];
}

interface IRecipeState {
    recipe: IRecipe; // recipe detail to display
    recipes: IRecipe[]; // list of recipes to display
    filter: IRecipeFilter;
}

// global filter
interface IRecipeFilter {
    category_id: number;
    query: string;
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