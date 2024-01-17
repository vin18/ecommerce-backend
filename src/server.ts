import { App } from "./app";
import { ValidateEnv } from "@utils/validateEnv";
import { ProductRoute } from "@routes/products.route";

ValidateEnv();

const app = new App([new ProductRoute()]);

app.listen();
