import { ProductController } from "@/controllers/products.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

export class ProductRoute implements Routes {
  public path = "/products";
  public router = Router();
  public product = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.product.getProducts);
    this.router.get(`${this.path}/:id`, this.product.getProductById);
  }
}
