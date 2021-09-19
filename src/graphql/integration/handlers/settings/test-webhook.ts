import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {WebhookType} from '../../../../types/settings';

const TEST_SUCCESS_WEBHOOK = gql`
    {
        testSuccessWebhook
    }
`;

const TEST_DECLINE_WEBHOOK = gql`
    {
        testDeclineWebhook
    }
`;

const testWebhook = async (type: WebhookType): Promise<boolean> => {
  const response = await (await integrationClient()).request(
    type === WebhookType.SUCCESS
      ? TEST_SUCCESS_WEBHOOK
      : TEST_DECLINE_WEBHOOK
  );

  return type === WebhookType.SUCCESS
    ? (response as { setSuccessWebhook: boolean }).setSuccessWebhook
    : (response as { setDeclineWebhook: boolean }).setDeclineWebhook;
};

export default testWebhook;
