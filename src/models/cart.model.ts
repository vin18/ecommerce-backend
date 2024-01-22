import { model, Schema, Document } from "mongoose";
import { Cart } from "@/interfaces/cart.interface";

const CartSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types,
      ref: "User",
    },
    products: [
      {
        productId: String,
        quantity: String,
        name: String,
        price: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

export const CartModel = model<Cart & Document>("Cart", CartSchema);
