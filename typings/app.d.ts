interface ICategoryState {
    categories: ICategory[];
}

interface IRecipeState {
    recipes: IRecipe[];
}

// global filter
interface IFilterState {
    category_id: number;
    query: string;
    recipe_id: number;
}

interface IStoreState {
    categoryState: ICategoryState;
    recipeState: IRecipeState;
    filterState: IFilterState;
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