import { client } from "../../config/database";
import { QueryResult } from "pg";
import { Category } from "./recipeModel";

export const recipeDataMapper = {
  getRecipesCards: (
    category: Category | null,
    country: string | null,
    name: string | null,
    callback: (error: Error, result: QueryResult) => void
  ) => {
    const query = `
    SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name", "recipe"."country"
    FROM "recipe"
    WHERE ("recipe"."category" = $1 OR $1 IS NULL)
    AND ("recipe"."country" = $2 OR $2 IS NULL)
    AND (unaccent("recipe"."name") ILIKE unaccent(CONCAT('%', COALESCE($3, '')::text, '%')))
    `;
    client.query(query, [category, country, name], callback);
  },
  getRecipeById: (
    id: number,
    callback: (error: Error, result: QueryResult) => void
  ) => {
    const query = `SELECT * FROM "recipe" WHERE "recipe"."id" = $1`;
    client.query(query, [id], callback);
  },
  getCategories: (callback: (error: Error, result: QueryResult) => void) => {
    const query = `
    SELECT DISTINCT "recipe"."category",
    CASE "category" WHEN 'Entrée' THEN 1 WHEN 'Plat' THEN 2 WHEN 'Dessert' THEN 3 END
    FROM "recipe"
    ORDER BY CASE "category" WHEN 'Entrée' THEN 1 WHEN 'Plat' THEN 2 WHEN 'Dessert' THEN 3 END
    `;
    client.query(query, callback);
  },
  getCountries: (callback: (error: Error, result: QueryResult) => void) => {
    const query = `SELECT DISTINCT "recipe"."country" FROM "recipe" ORDER BY "recipe"."country" ASC`;
    client.query(query, callback);
  },
};
