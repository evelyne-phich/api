const recipeResource = (app, models) => {
  app.get("/recipe", async (request, response) => {
    const recipes = [];

    response.send(recipes);
  });

  app.post("/recipe", async (request, response) => {
    const { Recipe } = models;
    const { name } = request.body;

    response.send({ name });
  });
};

module.exports = {
  recipeResource,
};
