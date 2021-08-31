import {gql} from 'graphql-request';
import {Task, TaskCreation} from '../../../../types/task';
import {integrationClient} from '../../index';

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
        }
    }
`;

const createTask = async (taskBody: TaskCreation): Promise<Task> => {
  const response = await integrationClient().request<{ createTask: Task }>(CREATE_TASK, {
    taskBody
  });
  return response.createTask;
};

export default createTask;
