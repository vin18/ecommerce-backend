import { App } from "./app";
import { ValidateEnv } from "@utils/validateEnv";
import { ProductRoute } from "@routes/products.route";
import { CartRoute } from "./routes/cart.route";

ValidateEnv();

const app = new App([new ProductRoute(), new CartRoute()]);

app.listen();
