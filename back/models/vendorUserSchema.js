const mongoose = require("mongoose");

const vendorUserSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      require: true,
    },
    vendorRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VendorUserRole",
      require: true,
    },
    enabled: {
        type: Boolean,
        default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("VendorUser", vendorUserSchema);
