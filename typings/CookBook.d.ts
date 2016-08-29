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

