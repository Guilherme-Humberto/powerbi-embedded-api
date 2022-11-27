import axios from "axios";
import { variables } from "@config/envs";
import { IEmbeddedBody, IRlsIdentities } from "@interface/index";

class GenerateEmbeddedTokenService {
  async execute(data: IEmbeddedBody, identities: IRlsIdentities) {
    const datasetsArr = data.datasets.map((id) => ({ id }));
    const reportsArr = data.reports.map((id) => ({ id }));
    const workspacesArr = data.workspaces.map((id) => ({ id }));

    const rlsIdentities = {
      accessLevel: "View",
      identities,
    };

    const embeddedBody = {
      datasets: datasetsArr,
      reports: reportsArr,
      targetWorkspaces: workspacesArr,
      ...rlsIdentities,
    };

    const headers = {
      authorization: `Bearer ${data.authToken}`,
      "Content-Type": "application/json",
    };

    const { data: embeddedTokenResponse } = await axios.post(
      variables.generateTokenUrl,
      embeddedBody,
      { headers }
    );

    return embeddedTokenResponse;
  }
}

export default new GenerateEmbeddedTokenService();
