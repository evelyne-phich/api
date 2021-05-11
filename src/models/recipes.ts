import { Schema } from "mongoose";

export const recipeSchema = new Schema({
  id: Number,
  category: String,
  createdAt: Date,
  name: String,
  thumbnailPictureUrl: String,
  pictureUrl: String,
  preparationTime: String,
  cookingTime: String,
  totalTime: String,
  quantity: String,
  ingredients: [String],
  instructions: [String],
});
