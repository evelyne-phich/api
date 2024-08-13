import { Client } from "pg";

type DevConfig = {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
};

const devConfig: DevConfig = {
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

export const client = new Client(devConfig);

client.connect();
