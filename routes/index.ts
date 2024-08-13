import express from "express";
import { router as recipesRoutes } from "./recipes";

export const router = express.Router();

router.use("/recipes", recipesRoutes);
