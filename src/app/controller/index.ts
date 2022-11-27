import { Request, Response } from "express";
import GenerateAuthToken from "@app/services/authToken";
import GenerateEmbeddedToken from "@app/services/embbeddToken";
import {
  IGenerateAuthToken,
  IEmbeddedBody,
  IRlsIdentities,
} from "@interface/index";

class PowerBIController {
  async healthCheck(_request: Request, response: Response) {
    return response.status(200).json({ ok: "Application is running" });
  }

  async getAuthToken(request: Request, response: Response) {
    try {
      const credentialsBody: IGenerateAuthToken = request.body;
      const azureAppSecret = String(request.headers.azure_app_secret);

      const result = GenerateAuthToken.execute(credentialsBody, azureAppSecret);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async getEmbeddedToken(request: Request, response: Response) {
    try {
      const credentialsBody: IEmbeddedBody = request.body;
      const identitiesBody: IRlsIdentities = request.body;

      const result = GenerateEmbeddedToken.execute(
        credentialsBody,
        identitiesBody
      );
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export default new PowerBIController();
