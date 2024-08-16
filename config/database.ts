import { Client } from "pg";
import { env } from "./env";

type DevConfig = {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
};

const devConfig: DevConfig = {
  host: env.PG_HOST,
  port: env.PG_PORT,
  user: env.PG_USER,
  password: env.PG_PASSWORD,
  database: env.PG_DATABASE,
};

export const client = new Client(devConfig);

client.connect();
