const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const { initModels } = require("./domains");
const { initResources } = require("./resources");

const PORT = process.env.PORT || 3002;

const main = async () => {
  await mongoose.connect("mongodb://localhost/api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const models = initModels(mongoose);

  // recipe.save();

  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.get("/", async (request, response) => {
    response.send({ status: "up" });
  });

  initResources(app, models);

  app.listen(PORT, () => {
    console.log(`The server is listening on: http://localhost:${PORT}`);
  });
};

main();
