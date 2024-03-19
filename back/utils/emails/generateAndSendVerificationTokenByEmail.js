const jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require('./sendVerificationEmail')

const generateAndSendVerificationTokenByEmail = async (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.EMAIL_VERIFICATION_SECRET, {
    expiresIn: "48h",
  });

  user.emailVerificationToken.token = token;
  user.emailVerificationToken.expires = new Date(
    Date.now() + 48 * 60 * 60 * 1000
  );
  user.isEmailVerified = false;

  await user.save();

  await sendVerificationEmail({
    toEmail: user.email,
    token: token,
    toFirstName: user.firstName,
    toLastName: user.lastName,
    toCreatedAt: user.createdAt,
    toExpiresAt: user.emailVerificationToken.espires,
  });
};

module.exports = { generateAndSendVerificationTokenByEmail };
