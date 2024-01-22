import { Cart } from "@/interfaces/cart.interface";
import { CartModel } from "@/models/cart.model";
import { Service } from "typedi";

@Service()
export class CartService {
  public async findProductItemsFromCart(userId: string): Promise<Cart[]> {
    const findItemsFromCart: Cart[] | null = await CartModel.findOne({
      _id: userId,
    });

    if (!findItemsFromCart)
      throw new Error("Product doesn't exist in the cart");

    return findItemsFromCart;
  }

  public async clearCartForUser(userId: string) {
    await CartModel.deleteMany({ userId });
  }
}
