import sendgrid from "@sendgrid/mail";
import { dbUri } from "../../../lib/apollo";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const domainValues = dbUri().subDomain;
const link = encodeURI(
  `https://www.${domainValues}.vouchrecruit.com/candidate-register?hrId=${req.body.hrId}&privacyId=${req.body.privacyId}`
);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: {
        email: "hello@vouchrecruit.com",
        name: "Vouch Recruit",
      }, // your website email address here
      templateId: "d-40f048ed85414c7dbef11d9280a4502b",
      cc: `${req.body.hrEmail}`,
      dynamicTemplateData: {
        link: link,
        hrFirstName: `${req.body.hrFirstName}`,
        hrLastName: `${req.body.hrLastName}`,
        companyName: `${req.body.companyName}`,
      },
      asm: {
        groupId: 17124,
      },
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
