const nodemailer = require("nodemailer");

const Mail = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shuvamflix@gmail.com",
        pass: "ikdlzzagglmmhgqg",
      },
    });

    const mailOptions = {
      from: "shuvamflix@gmail.com",
      to: req.body.email,
      subject: "Sending Email using Node.js",
      text: req.body.text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.send("Mail sent");
  } catch (error) {
    next(error);
  }
};

module.exports = { Mail };
