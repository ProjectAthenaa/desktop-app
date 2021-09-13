import {createSubscriptionObservable} from '../../../../main/util/subscriptions';
import {WS_SERVICE_ENDPOINT} from '../../index';
import {gql} from 'graphql-request';
import {DocumentNode} from 'apollo-link';
import {ipcMain} from 'electron';
import store from '../../../../main/util/store';

const MODULE_INFORMATION = gql`
    subscription {
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

const moduleInformationObservable = () => createSubscriptionObservable(
  WS_SERVICE_ENDPOINT,
  MODULE_INFORMATION as unknown as DocumentNode
);

export const moduleInformationSync = async (): Promise<{ unsubscribe: () => void }> => {
  const moduleInformationClient = moduleInformationObservable();

  const moduleInformationSubscription = moduleInformationClient.subscribe({
    next: (e) => {
      console.log(e);
      // const modules: ModuleInformation[] = store.get('modules');
      //
      // const updatedModules = modules.map(module => ({
      //
      // }));
    },
    error: () => {
      moduleInformationSubscription.unsubscribe();
      moduleInformationSync();
    }
  });

  return moduleInformationSubscription;
};
