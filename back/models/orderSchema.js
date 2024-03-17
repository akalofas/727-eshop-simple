const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          base: {
            type: Number,
            required: true,
          },
          discount: {
            type: Number,
            default: 0,
          },
          final: {
            type: Number,
            required: true,
          },
        },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "canceled", "returned", "refunded", "completed"],
      required: true,
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["creditCard", "paypal", "COD"],
      required: true,
    },
    billingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    shippingCost: {
      type: Number,
      required: true,
    },
    voucher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voucher",
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
