import testWebhookRequest from '../../../../../graphql/integration/handlers/settings/test-webhook';
import {WebhookType} from '../../../../../types/settings';

const testWebhook = async (_: never, type: WebhookType): Promise<boolean> => {
  return await testWebhookRequest(type);
};

export default testWebhook;



