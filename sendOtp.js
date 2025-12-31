const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = async function sendOTP(email, otp) {
  await transporter.sendMail({
    from: `"SAF GOV" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "SAF GOV Login OTP",
    text: `Your SAF GOV OTP is ${otp}. Valid for 5 minutes.`
  });
};
