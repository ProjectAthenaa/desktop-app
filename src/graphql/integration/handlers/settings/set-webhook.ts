import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {WebhookType} from '../../../../types/settings';

const SET_SUCCESS_WEBHOOK = gql`
    mutation SetSuccessWebhook($Webhook: String!){
        setSuccessWebhook(Webhook: $Webhook)
    }
`;

const SET_DECLINE_WEBHOOK = gql`
    mutation SetDeclineWebhook($Webhook: String!){
        setDeclineWebhook(Webhook: $Webhook)
    }
`;

const setWebhook = async (type: WebhookType, value: string): Promise<boolean> => {
  const response = await (await integrationClient()).request(
    type === WebhookType.SUCCESS
      ? SET_SUCCESS_WEBHOOK
      : SET_DECLINE_WEBHOOK,
    {
      Webhook: value
    }
  );

  return type === WebhookType.SUCCESS
    ? (response as { setSuccessWebhook: boolean }).setSuccessWebhook
    : (response as { setDeclineWebhook: boolean }).setDeclineWebhook;
};

export default setWebhook;
