import {
  IEmbeddedBody,
  IGenerateAuthToken,
  IRlsIdentities,
} from "@interface/index";

interface IValidateCredentials extends IGenerateAuthToken {
  azureAppSecret: string;
}

export const validateCredentialsAuthToken = (data: IValidateCredentials) => {
  if (!data.azureAppSecret || typeof data.azureAppSecret !== "string") {
    throw Error("azureAppSecret is required");
  }

  if (!data.scope || typeof data.scope !== "string") {
    throw Error("scope is required");
  }

  if (!data.resource || typeof data.resource !== "string") {
    throw Error("resource is required");
  }

  if (!data.clientId || typeof data.clientId !== "string") {
    throw Error("clientId is required");
  }

  if (!data.grantType || typeof data.grantType !== "string") {
    throw Error("grantType is required");
  }

  if (!data.clientSecret || typeof data.clientSecret !== "string") {
    throw Error("clientSecret is required");
  }
};

export const validateCredentialsEmbeddedToken = (
  credentials: IEmbeddedBody
) => {
  if (!Array.isArray(credentials.datasets)) {
    throw Error("datasets is required");
  }

  if (!Array.isArray(credentials.reports)) {
    throw Error("reports is required");
  }

  if (!Array.isArray(credentials.workspaces)) {
    throw Error("workspaces is required");
  }

  if (credentials.datasets.length === 0) {
    throw Error("datasets is not empty");
  }

  if (credentials.reports.length === 0) {
    throw Error("reports is not empty");
  }

  if (credentials.workspaces.length === 0) {
    throw Error("workspaces is not empty");
  }

  if (!credentials.authToken || typeof credentials.authToken !== "string") {
    throw Error("authToken is required");
  }
};

export const validateIdentitiesEmbeddedToken = (identities: IRlsIdentities) => {
  if (!Array.isArray(identities.datasets)) {
    throw Error("datasets is required");
  }

  if (!Array.isArray(identities.roles)) {
    throw Error("roles is required");
  }

  if (!identities.username || typeof identities.username !== "string") {
    throw Error("username is required");
  }
};
