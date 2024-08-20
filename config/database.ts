import { Client } from "pg";
import { env } from "./env";

type DatabaseConfig = {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  ssl: {
    rejectUnauthorized: boolean;
  };
};

const databaseConfig: DatabaseConfig = {
  host: env.PG_HOST,
  port: env.PG_PORT,
  user: env.PG_USER,
  password: env.PG_PASSWORD,
  database: env.PG_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
};

export const client = new Client(databaseConfig);

client.connect();
