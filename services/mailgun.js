const formData = require("form-data");
const Mailgun = require("mailgun.js");
const template = require("./emailTemplate");

const API_KEY = process.env.MAILGUN_API_KEY;

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

async function sendMail(data) {
  const survey_id = data.survey_id;
  const recipients = data.recipients;
  const recipientsVariables = data.recipientsVariables;

  /* 
    a workaround so we don't waste one email to send every campaign or
    you can put the user email in "to" parameter so he can check that the 
    campaign is being received by recipients  
  */
  const recipientFirst = recipients.pop();

  try {
    const result = await client.messages.create(
      "sandbox180c977ad1754b20a4c83d8b1a44285c.mailgun.org",
      {
        from: "Emaily App <no-reply@emailyapp.com>",
        to: recipientFirst,
        bcc: recipients,
        subject: data.subject,
        text: data.text,
        html: template(data.body, { survey_id }),
        "recipient-variables": JSON.stringify(recipientsVariables),
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = { sendMail };
