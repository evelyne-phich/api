import { Mongoose, Model } from "mongoose";

import { recipeSchema } from "./recipes";
import { messageSchema } from "./messages";

export const initModels = (mongoose: Mongoose) => {
  return {
    Recipe: mongoose.model("Recipe", recipeSchema),
    Message: mongoose.model("Message", messageSchema),
  };
};

export type APIModels = {
  Recipe: Model<any, any>;
  Message: Model<any, any>;
};
