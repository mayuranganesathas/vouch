import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: {
        email: "hello@vouchrecruit.com",
        name: "Interviews @ Vouch",
      }, // your website email address here
      cc: `${req.body.hrEmail}`,
      templateId: "d-26b055cc293b47a8ba272816cad13519",
      dynamicTemplateData: {
        candidateFirstName: `${req.body.candidateFirstName}`,
        hrFirstName: `${req.body.hrFirstName}`,
        hrLastName: `${req.body.hrLastName}`,
        companyName: `${req.body.companyName}`,
        hrEmail: `${req.body.hrEmail}`,
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
