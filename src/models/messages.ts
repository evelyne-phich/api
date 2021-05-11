import { Schema } from "mongoose";

export const messageSchema = new Schema({
  id: Number,
  text: String,
  createdAt: String,
});

export type MessageModel = {
  id: number;
  text: string;
  createdAt: Date;
};
