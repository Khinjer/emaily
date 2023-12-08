const router = require("express").Router();
const Survey = require("mongoose").model("surveys");
const mongoose = require("mongoose");
const mailService = require("../services/mailgun");
const requireLogin = require("../middleware/requireLogin");
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

router.post("/", requireLogin, async (req, res) => {
  console.log(req.user);
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
    await survey.save();
    return res.status(201).send(survey);
  }

  return res.status(400).send("something went wrong!");
});

router.get("/list",requireLogin, async (req, res) => {
  const surveyList = await Survey.find({});
  console.log(surveyList);
  res.status(200).json(surveyList);
});

router.get("/feedback/:surveyid/:answer/:recipient", async (req, res) => {
  const { surveyid, answer, recipient } = req.params;

  const survey = await Survey.findById(surveyid);
  if (!survey || !acceptedAnswers.includes(answer)) {
    return res.status(400).send("bad request");
  }
  const recipientData = survey.recipients.find(
    (data) => data._id.toString() === recipient.toString()
  );

  if (recipientData.clicked === false) {
    recipientData.clicked = true;
    recipientData.answer = answer;
    await survey.save();
    res.send("Thank you for your feedback!");
  } else {
    res.send("You've already sent your feedback Thank you :)");
  }
});

module.exports = router;
