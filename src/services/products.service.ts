import { Product } from "@/interfaces/products.interface";
import { ProductModel } from "@/models/products.model";
import { Service } from "typedi";

@Service()
export class ProductService {
  public async findAllProduct(): Promise<Product[]> {
    const products: Product[] = await ProductModel.find();
    return products;
  }

  public async findProductById(productId: string): Promise<Product> {
    const findProduct: Product | null = await ProductModel.findOne({
      _id: productId,
    });
    if (!findProduct) throw new Error("Product doesn't exist");

    return findProduct;
  }
}
