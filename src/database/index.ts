import { connect, set } from "mongoose";
import { DB_URI, NODE_ENV } from "../config";
import { logger } from "../utils/logger";

export const dbConnection = async () => {
  if (NODE_ENV !== "production") {
    set("debug", true);
  }

  logger.info("Env", NODE_ENV);
  try {
    await connect(DB_URI || "");
    logger.info(`🚀 Database connected`);
  } catch (error) {
    logger.error(`Error while connecting to database`, error);
  }
};
