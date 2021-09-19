import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {DelayType} from '../../../../types/settings';

const SET_ATC_DELAY = gql`
    mutation SetATCDelay($Delay: Int!){
        setATCDelay(Delay: $Delay)
    }
`;

const SET_CHECKOUT_DELAY = gql`
    mutation SetCheckoutDelay($Delay: Int!){
        setCheckoutDelay(Delay: $Delay)
    }
`;

const setDelay = async (type: DelayType, value: number): Promise<boolean> => {
  const response = await (await integrationClient())
    .request(
      type === DelayType.ATC
        ? SET_ATC_DELAY
        : SET_CHECKOUT_DELAY,
      {
        Delay: value
      }
    );

  return type === DelayType.ATC
    ? (response as { setATCDelay: boolean }).setATCDelay
    : (response as { setCheckoutDelay: boolean }).setCheckoutDelay;
};

export default setDelay;
