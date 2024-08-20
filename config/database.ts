import { Client } from "pg";
import { env } from "./env";

export const client = new Client(env.PG_CONNECTION_STRING);

client.connect();
