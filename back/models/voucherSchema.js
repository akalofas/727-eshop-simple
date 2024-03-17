const mongoose = require("mongoose");

const usageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    usage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const voucherSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    usage: {
      type: Number,
      required: true,
    },
    maxUsage: {
      type: Number,
      required: true,
    },
    maxUsagePerUser: {
      type: Number,
      required: true,
    },
    users: [usageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Voucher", voucherSchema);
