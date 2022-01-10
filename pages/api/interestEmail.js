import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "mayuran852@gmail.com", // your website email address here
      templateId: "d-26b055cc293b47a8ba272816cad13519",
      cc: `${req.body.hrEmail}`,
      dynamicTemplateData: {},
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
