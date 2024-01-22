import { Product } from "./products.interface";

export interface Cart {
  _id?: string;
  userId: string;
  products: Product[];
}
