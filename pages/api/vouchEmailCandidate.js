import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "mayuran852@gmail.com", // your website email address here
      templateId: "d-40f048ed85414c7dbef11d9280a4502b",
      dynamicTemplateData: {
        link: `localhost:3000/candidate-register?hrId=${req.body.hrId}`,
      },
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
