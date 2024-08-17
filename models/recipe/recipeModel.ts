export type Category = "Entrée" | "Plat" | "Dessert";

export type GetRecipes = {
  id: number;
  pictureUrl: string;
  category: Category;
  name: string;
  country: string;
}[];

export type GetRecipeById = {
  id: number;
  pictureUrl: string;
  category: Category;
  name: string;
  country: string;
  preparationTime: string;
  restTime: string;
  cookingTime: string;
  totalTime: string;
  quantity: string;
  ingredients: string[];
  instructions: string[];
};

export type GetCategories = Category[];

export type GetCountries = string[];
