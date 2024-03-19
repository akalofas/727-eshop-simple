const nodemailer = require("nodemailer");
const { EmailBody } = require("./emailBody");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendVerificationEmail = async ({
  toEmail,
  token,
  toFirstName,
  toLastName,
  toCreatedAt,
  toExpiresAt,
}) => {
  const verificationURL = `${process.env.FRONTEND_URL}${process.env.FRONTEND_URL_EMAIL_VERIFY}${token}`;
  const logo =
    "https://agodco.com/images/AGODCO/Logo/AGODCO_Group_LLC_logo.png";
  const siteName = "KoukouRoukou";
  const frontEndUrl = process.env.FRONTEND_URL;

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: toEmail,
    subject: `${siteName}: Please Verify Your Email Address`,
    html: EmailBody(
      toFirstName,
      toLastName,
      toCreatedAt,
      toExpiresAt,
      verificationURL,
      logo,
      siteName,
      frontEndUrl
    ),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification Email sent successfully");
  } catch (error) {
    console.error("Failed to send verification Email", error);
  }
};

module.exports = { sendVerificationEmail };
