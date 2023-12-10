const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  googleID: String,
  credit: {
    type: Number,
    default: 0,
  },
  paiments: []
});

mongoose.model("users", userSchema);
