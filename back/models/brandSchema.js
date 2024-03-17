const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/150",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);