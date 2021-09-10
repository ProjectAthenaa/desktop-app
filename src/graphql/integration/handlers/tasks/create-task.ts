import {gql} from 'graphql-request';
import {Task, TaskCreation} from '../../../../types/task';
import {integrationClient} from '../../index';
import {FetchedTask} from './get-task';

const CREATE_TASK = gql`
    mutation CreateTask($newTask: NewTask!){
        createTask(newTask: $newTask) {
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



const createTask = async (taskBody: TaskCreation): Promise<FetchedTask> => {
  const response = await integrationClient().request<{ createTask: FetchedTask }>(CREATE_TASK, {
    taskBody
  });
  return response.createTask;
};

export default createTask;
