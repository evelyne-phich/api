import express from "express";
import { recipeController } from "../controllers/recipeController";

export const router = express.Router();

router.get("/", recipeController.getRecipes);
router.get("/:recipeId", recipeController.getRecipeById);
router.get("/categories", recipeController.getCategories);
router.get("/countries", recipeController.getCountries);
