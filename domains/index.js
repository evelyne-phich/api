const { recipeSchema } = require("./recipes");

const initModels = (mongoose) => {
  return {
    Recipe: mongoose.model("Recipe", recipeSchema),
  };
};

module.exports = {
  initModels,
};
