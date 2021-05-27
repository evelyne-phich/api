import { Express } from "express";
import { body, validationResult } from "express-validator";

import { APIModels } from "../models";

export const recipeResource = (app: Express, models: APIModels) => {
  app.get("/recipe", async (request, response) => {
    const { Recipe } = models;
    const recipes = await Recipe.find({});

    response.send(recipes);
  });

  app.post(
    "/recipe",
    body("name").isString(),
    body("category").isString(),
    async (request, response) => {
      const { Recipe } = models;
      const { category, name } = request.body;

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const recipe = new Recipe({
        category,
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
    }
  );
};
