import setWebhookRequest from '../../../../../graphql/integration/handlers/settings/set-webhook';
import {WebhookType} from '../../../../../types/settings';

const setWebhook = async (_: never, type: WebhookType, value: string): Promise<boolean> => {
  return await setWebhookRequest(type, value);
};

export default setWebhook;
