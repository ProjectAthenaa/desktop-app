import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_TASK_GROUP = gql`
    mutation DeleteTaskGroup($taskGroupID: UUID!) {
        deleteTaskGroup(taskGroupID: $taskGroupID)
    }
`;


const deleteTaskGroup = async (taskGroupId: string): Promise<boolean> => {
  const response = await integrationClient()
    .request<{ deleteTaskGroup: boolean }>(DELETE_TASK_GROUP, { taskGroupID: taskGroupId });

  return response.deleteTaskGroup;
};

export default deleteTaskGroup;


