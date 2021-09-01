import {Product, Task} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

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
`

const getTask = async (taskId: string): Promise<RetrievedTask> => {
  return await integrationClient().request(GET_TASK, {
    taskID: taskId
  });
};

export default getTask;



