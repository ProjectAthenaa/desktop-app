import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_TASK = gql`
    mutation DeleteTask($taskID: UUID!){
        deleteTask(taskID: $taskID, deletedProduct: false)
    }
`;

const deleteTask = async (taskId: string): Promise<boolean> => {
  return await integrationClient().request(DELETE_TASK, {
    taskID: taskId,
  });
};

export default deleteTask;

