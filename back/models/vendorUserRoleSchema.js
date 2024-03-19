const mongoose = require("mongoose");

const vendorUserRoleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('vendorUserRole', vendorUserRoleSchema);