import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {Settings} from '../../../../types/settings';

const GET_SETTINGS = gql`
    {
        getSettings {
            SuccessWebhook
            DeclineWebhook
            ATCDelay
            CheckoutDelay
        }
    }
`;

const getSettings = async (): Promise<Settings> => {
  console.log('hit');
  const response = await (await integrationClient()).request(
    GET_SETTINGS
  );

  return response.getSettings;
};

export default getSettings;
