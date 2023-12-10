const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipientSchema = require("./Recipient");


const surveySchema = new Schema(
  {
    title: String,
    subject: String,
    body: String,
    recipients: [recipientSchema],
    sentAt: Date,
    updatedAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    yes: {
      type: Number,
      default : 0
    },
    no: {
      type: Number,
      default : 0
    } 
  },
  {
    timestamps: true,
  }
);

const Survey = mongoose.model("surveys", surveySchema);

module.exports = Survey;
