interface ICategoryState {
    categories: ICategory[];
}

interface IRecipeState {
    recipes: IRecipe[];
}

interface IQueryState {
    query: string;
}

interface IStoreState {
    categoryState: ICategoryState;
    recipeState: IRecipeState;
    queryState: IQueryState;
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
}

