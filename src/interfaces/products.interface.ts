export interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image: {
    public_id: string;
    url: string;
  };
  discount?: string;
  countInStock: string;
  category: string;
  brand: string;
}
