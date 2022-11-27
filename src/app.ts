import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(router);
  }
}

export default new App().express;
