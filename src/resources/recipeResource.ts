import { Express } from "express";

import { APIModels } from "../models";

export const recipeResource = (app: Express, models: APIModels) => {
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

    recipe.save((error: any) => {
      if (error) {
        response.send({ error });
        return;
      }

      response.send({ recipe });
    });
  });
};
