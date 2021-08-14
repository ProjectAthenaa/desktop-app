import services from '../protos/integration_grpc_pb';
import {certs} from './index';

const INTEGRATION_SERVICE = 'svc.integration.athenabot.com:443';

export const tasksClient = new services.TasksClient(
  INTEGRATION_SERVICE,
  certs
);

export const accountGroupsClient = new services.AccountGroupsClient(
  INTEGRATION_SERVICE,
  certs
);

export const profilesClient = new services.ProfilesClient(
  INTEGRATION_SERVICE,
  certs
);

export const proxyListClient = new services.ProxyListClient(
  INTEGRATION_SERVICE,
  certs
);

export const settingsClient = new services.SettingsClient(
  INTEGRATION_SERVICE,
  certs
);
