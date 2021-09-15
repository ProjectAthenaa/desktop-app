import getModuleInformationRequest from '../../../../../graphql/integration/handlers/settings/get-site-info';
import {ModuleInformation} from '../../../../../types/modules';

const getSiteInfo = async (): Promise<ModuleInformation[]> => {
  return await getModuleInformationRequest();
};

export default getSiteInfo;



