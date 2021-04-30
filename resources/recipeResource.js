const recipeResource = (app, models) => {
  app.get("/recipe", async (request, response) => {
    const { Recipe } = models;
    const recipes = await Recipe.find({});

    response.send(recipes);
  });

  app.post("/recipe", async (request, response) => {
    const { Recipe } = models;
    const { name } = request.body;

    const recipe = new Recipe({
      createdAt: new Date(),
      name,
    });

    recipe.save((err) => {
      if (err) {
        response.send({ error });
        return;
      }

      response.send({ recipe });
    });
  });
};

module.exports = {
  recipeResource,
};
