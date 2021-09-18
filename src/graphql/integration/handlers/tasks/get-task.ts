import {LookupType, Product, Site, Task} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {ProxyList} from '../../../../types/proxy';
import {ProfileGroup} from '../../../../types/profile';

export interface RetrievedTask {
  ID: string;
  StartTime: string;
  Product: Product;
  ProxyList: {
    ID: string;
    Name: string;
  }
  ProfileGroup: {
    ID: string;
    Name: string;
  }
}

const GET_TASK = gql`
    query GetTask($taskID: UUID!) {
        getTask(taskID: $taskID) {
            ID
            StartTime
            Product {
                ID
                Name
                Image
                LookupType
                PositiveKeywords
                NegativeKeywords
                Link
                Quantity
                Sizes
                Colors
                Site
                Metadata
            }
            ProxyList {
                ID
                Name
            }
            ProfileGroup {
                ID
                Name
            }
        }
    }
`;

export interface FetchedTask {
  ID: string;
  StartTime: string;
  Product: {
    ID: string;
    Name: string;
    Image?: string;
    LookupType: LookupType;
    PositiveKeywords: string[];
    NegativeKeywords: string[];
    Link?: string;
    Quantity?: string;
    Sizes: string[];
    Colors: string[];
    Site: Site;
    Metadata: Record<string, unknown>;
  };
  ProxyList: { ID: string; Name: string; };
  ProfileGroup: { ID: string; Name: string; };
}

const getTask = async (taskId: string): Promise<FetchedTask> => {
  const response = await (await integrationClient()).request<{ getTask: FetchedTask }>(GET_TASK, {
    taskID: taskId
  });

  return response.getTask;
};

export default getTask;



