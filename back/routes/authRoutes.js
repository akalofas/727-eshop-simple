const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User/userSchema");
const UserRole = require("../models/UserRole/userRoleSchema");
const mongoose = require("mongoose");
const { generateAndSendVerificationTokenByEmail } = require('../utils/emails/generateAndSendVerificationTokenByEmail')

const router = express.Router();

// Token Generator
function generateRefreshToken() {
  return jwt.sign({}, process.JWT_SECRET, { expiresIn: "7d" });
}

// User Register
router.post("/register", async (req, res) => {
  const {
    email,
    password,
    firstname,
    lastname,
    phone,
    mobile,
    gendre,
    birthdate,
  } = req.body;
  try {
    const existedUser = await User.findOne({ email: email });
    if (existedUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUserRole = await UserRole.findOne({ role: "User" });

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const token = jwt.sign(
        {
          email: email,
          role: newUserRole._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      const refreshToken = generateRefreshToken();

      const newUser = new User({
        email: email,
        password: hashPassword,
        role: newUserRole._id,
        active: true,
        firstName: firstname,
        lastName: lastname,
        avatar: "https://placehold.co/200x200/green/white.webp",
        phone: phone ? phone : "000000000",
        mobile: mobile,
        gendre: gendre,
        birthDate: birthdate,
        isEmailVerified: false,
        emailVerificationToken: {
          token: "",
          expires: null,
        },
        session: {
          token: token,
          refreshToken: refreshToken,
          expires: new Date(Date.now() + 3600000),
        },
      });

      const result = await newUser.save({ session });
      await session.commitTransaction();

      generateAndSendVerificationTokenByEmail(newUser);

      res.status(201).json({
        message: "User Created Successfully",
        userId: result._id,
        session: { token, refreshToken },
        role: UserRole.name,
      });
    } catch (error) {
      await session.abortTransaction();
      res.status(500).json({ message: "Failed to create User" });
    } finally {
      session.endSession();
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
