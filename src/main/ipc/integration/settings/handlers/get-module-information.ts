import getModuleInformationRequest, {ModuleInformation} from '../../../../../graphql/integration/handlers/settings/module-information';

const getModuleInformation = async (): Promise<ModuleInformation[]> => {
  return await getModuleInformationRequest();
};

export default getModuleInformation;



