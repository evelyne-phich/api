const { Schema } = require("mongoose");

const recipeSchema = new Schema({
  id: Number,
  category: String,
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

module.exports = {
  recipeSchema,
};
