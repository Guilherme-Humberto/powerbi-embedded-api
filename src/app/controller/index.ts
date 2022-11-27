import { Request, Response } from "express";
import GenerateAuthToken from "@app/services/authToken";
import GenerateEmbeddedToken from "@app/services/embbeddToken";
import {
  IGenerateAuthToken,
  IEmbeddedBody,
  IRlsIdentities,
} from "@interface/index";
import {
  validateCredentialsAuthToken,
  validateCredentialsEmbeddedToken,
  validateIdentitiesEmbeddedToken,
} from "@validation/index";

class PowerBIController {
  async healthCheck(_request: Request, response: Response) {
    try {
      return response.status(200).json({ ok: "Application is running" });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }

  async getAuthToken(request: Request, response: Response) {
    try {
      const credentialsBody: IGenerateAuthToken = request.body;
      const azureAppSecret = String(request.headers.azure_app_secret);

      validateCredentialsAuthToken({ ...credentialsBody, azureAppSecret });

      const result = GenerateAuthToken.execute(credentialsBody, azureAppSecret);
      return response.status(200).json(result);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }

  async getEmbeddedToken(request: Request, response: Response) {
    try {
      const credentialsBody: IEmbeddedBody = request.body;
      const identitiesBody: IRlsIdentities = request.body;

      validateCredentialsEmbeddedToken(credentialsBody);
      validateIdentitiesEmbeddedToken(identitiesBody);

      const result = GenerateEmbeddedToken.execute(
        credentialsBody,
        identitiesBody
      );

      return response.status(200).json(result);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}

export default new PowerBIController();
