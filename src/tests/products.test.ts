import mongoose from "mongoose";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { App } from "@/app";
import { ProductRoute } from "@/routes/products.route";
import { STATUS_CODES } from "@/utils/status-codes";
import { Product } from "@/interfaces/products.interface";

const productsData: Product[] = new Array(6).fill(null).map((el, index) => ({
  _id: `qpwoeiruty${index}`,
  name: faker.internet.displayName(),
  price: parseInt(faker.commerce.price()),
  description: faker.lorem.paragraph(),
  image: {
    public_id: faker.internet.avatar(),
    url: faker.internet.avatar(),
  },
  discount: faker.string.numeric(),
  countInStock: faker.string.numeric(),
  category: faker.commerce.department(),
  brand: faker.commerce.department(),
}));

describe("Testing Products", () => {
  describe("[GET] /products", () => {
    it("response find all Products", async () => {
      const productsRoute = new ProductRoute();
      const products = productsRoute.product.product;

      products.findAllProduct = jest.fn().mockReturnValue(productsData);

      mongoose.connect = jest.fn();
      const app = new App([productsRoute]);
      return request(app.getServer())
        .get(`${productsRoute.path}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("[GET] /products/:id", () => {
    it("response get single Product", async () => {
      const productId = "qpwoeiruty";

      const productsRoute = new ProductRoute();
      const products = productsRoute.product.product;

      products.findProductById = jest.fn().mockReturnValue(productsData[0]);

      (mongoose as any).connect = jest.fn();
      const app = new App([productsRoute]);
      return request(app.getServer())
        .get(`${productsRoute.path}/${productId}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(STATUS_CODES.OK);
    });
  });
});
