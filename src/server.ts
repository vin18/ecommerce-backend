import { App } from "./app";
import { ValidateEnv } from "@utils/validateEnv";
import { ProductRoute } from "@routes/products.route";
import { CartRoute } from "./routes/cart.route";
import { AuthRoute } from "./routes/auth.route";

ValidateEnv();

const app = new App([new ProductRoute(), new CartRoute(), new AuthRoute()]);

app.listen();
