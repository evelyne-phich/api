import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router } from "./routes";
import cors from "cors";
import { env } from "./config/env";

const app = express();
const port = 3000;

const allowedOrigins: string[] = ["https://on-cuisine-quoi.vercel.app"];
if (env.NODE_ENV === "local") {
  allowedOrigins.push("http://localhost:5173");
}
app.use(cors({ origin: allowedOrigins }));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
