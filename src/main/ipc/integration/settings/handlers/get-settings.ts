import getSettingsRequest from '../../../../../graphql/integration/handlers/settings/get-settings';
import {Settings} from '../../../../../types/settings';

const getSettings = async (): Promise<Settings> => {
  return await getSettingsRequest();
};

export default getSettings;



