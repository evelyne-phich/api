const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (request, response) => {
  response.send({ status: "up" });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
