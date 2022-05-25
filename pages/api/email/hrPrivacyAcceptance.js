import sendgrid from "@sendgrid/mail";
import { dbUri } from "../../../lib/apollo";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const domainType = dbUri().subDomain;

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.hrEmail}`, // Your email where you'll receive emails
      from: {
        email: "hello@vouchrecruit.com",
        name: `Vouch | ${req.body.canFirstName} has accepted your request`,
      },
      templateId: "d-bc5faf1a90134528adad3a94a13a74cd", // To Add
      dynamicTemplateData: {
        candidateFirstName: `${req.body.canFirstName}`, //HR Manager recognizes Cand
        candidatePosition: `${req.body.candidatePosition}`, //HR Manager recognizes Position
        canEmail: `${req.body.candidateEmail}`, //HR Manager can move candidate to contacted via new page, new page
        hrFirstName: `${req.body.hrFirstName}`, //address HR Manager
        hrId: `${req.body.hrId}`, // Passes into URL for move to contacted query
        canLinkedIn: `${req.body.canLinkedIn}`, //Give direct access to HR manager so they dont have to go to profile
        link: `https://${domainType}.vouchrecruit.com/contact-candidate?hrId=${req.body.hrId}&candidateId=${req.body.candidateId}&canEmail=${req.body.canEmail}`,
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
