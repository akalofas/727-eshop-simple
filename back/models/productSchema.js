const mongoose = require("mongoose");
 
const productImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const specificationSchema = new mongoose.Schema(
  {
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
      }
    },
    SKU: {
      type: String,
      default: "0",
    },
    ISBN: {
      type: String,
      default: "0",
    },
    unitSale: {
      type: String,
      Enum: ["cm", "m", "mm", "kg", "g", "mg", "l", "ml", "item"],
    },
    weight: {
      type: String,
      default: "0",
    },
    width: {
      type: String,
      default: "0",
    },
    height: {
      type: String,
      default: "0",
    },
    depth: {
      type: String,
      default: "0",
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  { timestamps: true }
);

const productSeoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    metaKeywords: {
      type: [String],
      default: [],
    },
    url: {
      type: String,
      required: true,
    },
    canonical: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    specifications: {
      type: [specificationSchema],
      default: [],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    imageDefault: {
      productImageSchema,
      required: true,
    },
    images: {
      type: [productImageSchema],
      default: [],
    },
    seo: {
      type: productSeoSchema,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.index({ name: 1, category: 1, brand: 1 });

module.exports = mongoose.model("Product", productSchema);
