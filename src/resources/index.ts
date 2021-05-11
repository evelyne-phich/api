import { Express } from "express";

import { recipeResource } from "./recipeResource";
import { APIModels } from "../models";

export const initResources = (app: Express, models: APIModels) => {
  recipeResource(app, models);
};
