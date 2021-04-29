const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { initModels } = require("./domains");
const { initResources } = require("./resources");

const PORT = process.env.PORT || 8081;

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

  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.get("/", async (request, response) => {
    response.send({ status: "up" });
  });

  /* DRAFT FOR SSE */
  let clients = [];
  const emitters = [];
  const messages = [
    {
      createdAt: new Date(),
      text: "Hello",
      id: 1,
    },
    {
      createdAt: new Date(),
      text: "World",
      id: 2,
    },
  ];

  function eventsHandler(request, response, next) {
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };
    response.writeHead(200, headers);

    const data = `data: ${JSON.stringify(messages)}\n\n`;

    // response.write(data);

    const clientId = Date.now();

    const newClient = {
      id: clientId,
      response,
    };

    clients.push(newClient);

    request.on("close", () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter((client) => client.id !== clientId);
    });
  }

  function sendEventsToAll(message) {
    console.log({
      clients1: clients,
      write: `data: ${JSON.stringify(message)}\n\n`,
    });
    clients.forEach((client) =>
      client.response.write(`data: ${JSON.stringify(message)}\n\n`)
    );
  }

  app.get("/events", eventsHandler);

  // app.get("/api/message/sse", async (request, response) => {
  //   const client = new SSEClient(response);

  //   client.initialize();
  //   emitters.push(client);
  //   console.log("A client is connected");

  //   response.send(client);
  // });
  app.get("/api/message/sse", eventsHandler);
  app.get("/api/message", async (request, response) => {
    response.send(messages);
  });
  let nbMessage = 2;
  app.post("/api/message", async (request, response) => {
    const { body } = request;

    const { message } = body;
    const newMessage = {
      id: ++nbMessage,
      text: message,
      createdAt: new Date(),
    };

    console.log({ newMessage, clients });

    messages.push(message);
    // response.send({ message });
    response.json(newMessage);
    return sendEventsToAll(newMessage);
  });

  /* END OF DRAFT */
  initResources(app, models);

  app.listen(PORT, () => {
    console.log(`The server is listening on: http://localhost:${PORT}`);
  });
};

main();
