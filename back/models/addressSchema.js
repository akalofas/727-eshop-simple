const mongoose = require("mongoose");
 
const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nickName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
    },
    companyName: {
      type: String,
    },
    vatNumber: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    aptSuiteFloor: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    regionState: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
