export type Category = "Entrée" | "Plat" | "Dessert";

export type Recipe = {
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
