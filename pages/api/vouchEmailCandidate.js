import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "hello@vouchrecruit.com", // your website email address here
      templateId: "d-40f048ed85414c7dbef11d9280a4502b",
      cc: `${req.body.hrEmail}`,
      dynamicTemplateData: {
        link: `www.app.vouchrecruit.com/candidate-register?hrId=${req.body.hrId}&email=${req.body.email}`,
        hrFirstName: `${req.body.hrFirstName}`,
        hrLastName: `${req.body.hrLastName}`,
        companyName: `${req.body.companyName}`,
      },
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
