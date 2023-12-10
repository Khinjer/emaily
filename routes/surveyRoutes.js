const router = require("express").Router();
const Survey = require("mongoose").model("surveys");
const mongoose = require("mongoose");
const mailService = require("../services/mailgun");
const requireLogin = require("../middleware/requireLogin");
const requireCredit = require("../middleware/requireCredit");
const acceptedAnswers = ["yes", "no", "okay"];

const formatRecipients = (recipients) => {
  const recipientsArray = recipients.split(",");
  const formattedRecipients = recipientsArray.map((recipient) => {
    return {
      email: recipient,
    };
  });
  return formattedRecipients;
};

const recipientsVariables = (recipients) => {
  const recipientsVariables = {};
  recipients.forEach((recipient) => {
    recipientsVariables[recipient.email] = { id: recipient._id };
  });
  return recipientsVariables;
};

router.post("/", requireLogin, requireCredit, async (req, res) => {
  const { title, subject, body } = req.body;
  const formattedRecipients = formatRecipients(req.body.recipients);
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: formattedRecipients,
    user: req.user,
  });

  const data = {
    survey_id: survey._id,
    subject: survey.subject,
    body: survey.body,
    text: survey.body,
    recipientsVariables: recipientsVariables(survey.recipients),
    recipients: req.body.recipients.split(","),
  };

  //sending mail before saving survey
  const sent = await mailService.sendMail(data);

  if (sent) {
    survey.senAt = new Date();
    req.user.credit -= 1;
    await survey.save();
    const user = await req.user.save();
    return res.status(201).send(user);
  }

  return res.status(400).send("something went wrong!");
});


// get surveys list for current logged in user
router.get("/list", requireLogin, async (req, res) => {
  const surveyList = await Survey.find({ user: req.user });
  res.status(200).json(surveyList);
});

router.get("/feedback/:surveyid/:answer/:recipient", async (req, res) => {
  const { surveyid, answer, recipient } = req.params;

  if (!surveyid || !answer || !recipient) {
    return res.status(400).send("BAD REQUEST");
  }

  // TODO: ADD ERROR HANDLER

  const surveyResult = await Survey.updateOne(
    {
      _id: surveyid,
      recipients: {
        $elemMatch: { _id: recipient, clicked: false },
      },
    },
    {
      $inc: { [answer]: 1 },
      $set: { "recipients.$.clicked": true, "recipients.$.answer": answer },
      updatedAt: new Date(),
    }
  ).exec();

  if (surveyResult.modifiedCount) {
    return res.send("Thank you for your feedback!");
  }

  return res.send("You've already sent your feedback Thank you :)");
});

module.exports = router;
