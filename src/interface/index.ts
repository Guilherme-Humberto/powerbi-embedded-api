export interface IGenerateAuthToken {
  clientId: string;
  clientSecret: string;
  grantType: string;
  resource: string;
  scope: string;
}

interface IEmbeddedProperties {
  id: string;
}

export interface IEmbeddedBody {
  datasets: IEmbeddedProperties[];
  reports: IEmbeddedProperties[];
  workspaces: IEmbeddedProperties[];
  authToken: string
}

export interface IRlsIdentities {
  username: string
  roles: string[]
  datasets: string[]
}