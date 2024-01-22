import { NextFunction, Request, Response } from "express";
import { Container } from "typedi";
import { Cart } from "@/interfaces/cart.interface";
import { CartService } from "@/services/cart.service";
import { STATUS_CODES } from "@/utils/status-codes";

export class CartController {
  public cart = Container.get(CartService);

  public getProductItemsFromCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // @ts-ignore (TODO: Add RequestType after adding auth middleware)
      const userId = req.user._id;
      const findAllItemsFromCartData: Cart[] =
        await this.cart.findProductItemsFromCart(userId);

      res.status(STATUS_CODES.OK).json({
        data: findAllItemsFromCartData,
        message: "Get all products from the cart",
      });
    } catch (error) {
      next(error);
    }
  };

  public clearItemsFromCart = async (req: Request, res: Response) => {
    // @ts-ignore (TODO: Add RequestType after adding auth middleware)
    const userId = req.user._id;
    await this.cart.clearCartForUser(userId);

    res.status(STATUS_CODES.DELETED).json({
      success: true,
      message: `Removed all the products from the cart`,
    });
  };
}
