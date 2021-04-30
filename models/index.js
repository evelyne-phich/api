const { recipeSchema } = require("./recipes");
const { messageSchema } = require("./messages");

const initModels = (mongoose) => {
  return {
    Recipe: mongoose.model("Recipe", recipeSchema),
    Message: mongoose.model("Message", messageSchema),
  };
};

module.exports = {
  initModels,
};
