import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {ModuleInformation} from '../../../../types/modules';

const GET_MODULE_INFORMATION = gql`
    {
        moduleInformation {
            Name
            Status
            Fields {
                FieldKey
                Validation
                Label
                Type
                DropdownValues
            }
        }
    }
`;

const getModuleInformation = async (): Promise<ModuleInformation[]> => {
  const response = await (await integrationClient())
    .request<{ moduleInformation: ModuleInformation[] }>(GET_MODULE_INFORMATION);

  return response.moduleInformation;
};

export default getModuleInformation;
