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
  console.log('hiiiit')
  try {
    const response = await integrationClient()
      .request<{ createTaskGroup: TaskGroup }>(CREATE_TASK_GROUP, {
        newTaskGroup: taskGroup
      });

    console.log('response', response);

    return response.createTaskGroup;
  } catch (error) {
    console.log('errorino', error);
  }

};

export default createTaskGroup;
