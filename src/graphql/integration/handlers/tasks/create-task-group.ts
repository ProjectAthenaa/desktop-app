import {TaskGroupCreation} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedTaskGroup} from './get-group';


const CREATE_TASK_GROUP = gql`
    mutation CreateTaskGroup($newTaskGroup: NewTaskGroup!){
        createTaskGroup(newTaskGroup: $newTaskGroup) {
            ID
            Name
        }
    }
`;

export const createTaskGroup = async (taskGroup: TaskGroupCreation): Promise<FetchedTaskGroup> => {
  const response = await integrationClient()
    .request<{ createTaskGroup: FetchedTaskGroup }>(CREATE_TASK_GROUP, {
      newTaskGroup: taskGroup
    });
  return response.createTaskGroup;
};

export default createTaskGroup;
