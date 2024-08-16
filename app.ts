import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
