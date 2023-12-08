const { Schema } = require("mongoose");

const recipientSchema = new Schema({
  email: String,
  answer: {
    type: String,
    default: "",
  },
  clicked: {
    type: Boolean,
    default: false,
  },
});

module.exports = recipientSchema;
