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

interface IDoableItem {
    text: string;
    done: boolean;
}

interface IRecipe {
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