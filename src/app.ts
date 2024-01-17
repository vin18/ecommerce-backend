import "reflect-metadata";
import express from "express";
import { NODE_ENV, PORT } from "@/config";
import { logger } from "@/utils/logger";
import { dbConnection } from "@/database";
import { Routes } from "@/interfaces/routes.interface";

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.initializeRoutes(routes);
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    await dbConnection();
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => this.app.use("/", route.router));
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }
}
