import { CartController } from "@/controllers/cart.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

export class CartRoute implements Routes {
  public path = "/cart";
  public router = Router();
  public cart = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // TODO: Add auth middleware
    this.router.get(`${this.path}`, this.cart.getProductItemsFromCart);
    this.router.delete(`${this.path}`, this.cart.clearItemsFromCart);
  }
}
