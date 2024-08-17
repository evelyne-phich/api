import { Request, Response } from "express";
import { QueryResult } from "pg";
import { recipeDataMapper } from "../models/recipe/recipeDataMapper";
import {
  Category,
  GetCategories,
  GetCountries,
  GetRecipeById,
  GetRecipes,
} from "../models/recipe/recipeModel";

type RecipeQuery = {
  category?: Category;
  country?: string;
  name?: string;
};

export const recipeController = {
  getRecipesCards: (req: Request<{}, {}, {}, RecipeQuery>, res: Response) => {
    const category = req.query.category || null;
    const country = req.query.country || null;
    const name = req.query.name || null;

    recipeDataMapper.getRecipesCards(
      category,
      country,
      name,
      (_: Error, result: QueryResult) => {
        const recipes: GetRecipes = result.rows;
        return res.send(recipes);
      }
    );
  },
  getRecipeById: (
    req: Request<{ recipeId: number }, {}, {}, {}>,
    res: Response
  ) => {
    const id = req.params.recipeId;

    recipeDataMapper.getRecipeById(id, (_: Error, result: QueryResult) => {
      if (!result.rows[0]) {
        return res.status(404).send("L'id de la recette n'existe pas.");
      }

      const recipe: GetRecipeById = result.rows[0];
      return res.send(recipe);
    });
  },
  getCategories: (_: Request<{}, {}, {}>, res: Response) => {
    recipeDataMapper.getCategories((_: Error, result: QueryResult) => {
      const categories: GetCategories = result.rows.map(
        (item) => item.category
      );
      return res.send(categories);
    });
  },
  getCountries: (_: Request<{}, {}, {}>, res: Response) => {
    recipeDataMapper.getCountries((_: Error, result: QueryResult) => {
      const countries: GetCountries = result.rows.map((item) => item.country);
      return res.send(countries);
    });
  },
};
