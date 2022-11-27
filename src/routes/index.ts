import express from "express";
import controller from '@app/controller'


class AppRouter {
  public router = express.Router();

  constructor() {
    this.routes();
  }

  private routes() {
    this.router.get("/healthCheck", controller.healthCheck);
    this.router.post("/generate-auth-token", controller.getAuthToken);
    this.router.post("/generate-embedded-token", controller.getEmbeddedToken);
  }
}

export default new AppRouter().router;
