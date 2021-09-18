import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_TASK = gql`
    mutation DeleteTask($taskID: UUID!){
        deleteTask(taskID: $taskID, deletedProduct: false)
    }
`;

const deleteTask = async (taskId: string): Promise<boolean> => {
  const response = await (await integrationClient()).request<{ deleteTask: boolean }>(DELETE_TASK, {
    taskID: taskId,
  });

  return response.deleteTask;
};

export default deleteTask;

