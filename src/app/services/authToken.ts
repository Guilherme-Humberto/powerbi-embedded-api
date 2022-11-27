import axios from "axios";
import { IGenerateAuthToken } from "@interface/index";

class GenerateAuthTokenService {
  async execute(credentials: IGenerateAuthToken, azureAppSecret: string) {
    const azureAuthToken = `https://login.microsoftonline.com/${azureAppSecret}/oauth2/token`;

    const body = JSON.stringify({ ...credentials });

    const { data: authResponse } = await axios.post(azureAuthToken, body, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return authResponse;
  }
}

export default new GenerateAuthTokenService();
