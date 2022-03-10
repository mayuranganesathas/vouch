import sendgrid from "@sendgrid/mail";
import { dbUri } from "../../../lib/apollo";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const domainType = dbUri().subDomain;

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: {
        email: "hello@vouchrecruit.com",
        name: `Vouch | ${req.body.companyName} wants to learn more`,
      },
      templateId: "d-9e5ab00d24894367bdd292b137d452bb",
      dynamicTemplateData: {
        candidateFirstName: `${req.body.canFirstName}`,
        hrFirstName: `${req.body.hrFirstName}`,
        hrLastName: `${req.body.hrLastName}`,
        companyName: `${req.body.companyName}`,
        link: `https://${domainType}.vouchrecruit.com/accept?hrId=${req.body.hrId}&candidateId=${req.body.candidateId}`,
      },
      asm: {
        groupId: 17125,
      },
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
