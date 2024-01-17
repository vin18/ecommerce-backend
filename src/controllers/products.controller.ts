import { Product } from "@/interfaces/products.interface";
import { ProductService } from "@/services/products.service";
import { STATUS_CODES } from "@/utils/status-codes";
import { NextFunction, Request, Response } from "express";
import { Container } from "typedi";

export class ProductController {
  public product = Container.get(ProductService);

  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllProductsData: Product[] =
        await this.product.findAllProduct();

      res
        .status(STATUS_CODES.OK)
        .json({ data: findAllProductsData, message: "Get all products" });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productId: string = req.params.id;
      const findOneProductData: Product = await this.product.findProductById(
        productId
      );

      res
        .status(STATUS_CODES.OK)
        .json({ data: findOneProductData, message: "Get single product" });
    } catch (error) {
      next(error);
    }
  };
}
