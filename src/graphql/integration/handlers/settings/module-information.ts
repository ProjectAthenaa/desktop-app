import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {AccountGroup} from '../../../../types/account';

export enum FieldType {
  KEYWORDS = 'KEYWORDS',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  GENDER = 'GENDER',
  WIDTH = 'WIDTH',
  SHOE_SIZE = 'SHOE_SIZE'
}
export interface ModuleField {
  Type: FieldType,
  Label: string;
  Validation: string;
  FieldKey: string;
}
export enum ModuleStatus {
  FUNCTIONAL = 'FUNCTIONAL',
  DEGRADED = 'DEGRADED',
  DOWN = 'DOWN'
}
export interface ModuleInformation {
  Name: string;
  Status: ModuleStatus;
  Fields: ModuleField[];
}

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
            }
        }
    }
`;

const getModuleInformation = async (): Promise<ModuleInformation[]> => {
  const response = await integrationClient()
    .request<{ moduleInformation: ModuleInformation[] }>(GET_MODULE_INFORMATION);

  return response.moduleInformation;
};

export default getModuleInformation;
