import {TaskGroupCreation, TaskGroup} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';


const CREATE_TASK_GROUP = gql`
    mutation CreateTaskGroup($newTaskGroup: NewTaskGroup!){
        createTaskGroup(newTaskGroup: $newTaskGroup) {
            ID
            Name
        }
    }
`;

export const createTaskGroup = async (taskGroup: TaskGroupCreation): Promise<TaskGroup> => {
  const response = await integrationClient()
    .request<{ createTaskGroup: TaskGroup }>(CREATE_TASK_GROUP, {
      newTaskGroup: taskGroup
    });
  return response.createTaskGroup;
};

export default createTaskGroup;
