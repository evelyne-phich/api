const { recipeResource } = require("./recipeResource");

const initResources = (app, models) => {
  recipeResource(app, models);
};

module.exports = {
  initResources,
};
