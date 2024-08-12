import { Client } from "pg";

const devConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

const client = new Client(devConfig);

client.connect();

module.exports = client;
