import setDelayRequest from '../../../../../graphql/integration/handlers/settings/set-delay';
import {DelayType} from '../../../../../types/settings';

const setDelay = async (_: never, type: DelayType, value: number): Promise<boolean> => {
  return await setDelayRequest(type, value);
};

export default setDelay;



