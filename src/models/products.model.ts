import { model, Schema, Document } from "mongoose";
import { Product } from "@/interfaces/products.interface";

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product must have a name"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
    },
    description: {
      type: String,
      required: [true, "Product must have a description"],
      trim: true,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    discount: {
      type: String,
      default: "0",
    },
    countInStock: {
      type: Number,
      required: [true, "A product must have count in stock"],
    },
    category: {
      type: String,
      required: [true, "A product must have a category"],
    },
    brand: {
      type: String,
      required: [true, "A product must have a brand"],
    },
  },
  { timestamps: true }
);

export const ProductModel = model<Product & Document>("Product", ProductSchema);
