const { Schema } = require("mongoose");

const messageSchema = new Schema({
  id: Number,
  text: String,
  createdAt: String,
});

module.exports = {
  messageSchema,
};
