export type Category = "Entrée" | "Plat" | "Dessert";

export type Recipe = {
  id: string;
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
