import {TaskGroup} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedTaskGroup} from './get-group';

type UpdatedTaskGroup = {
  Name: string;
};

const UPDATE_TASK = gql`
    mutation UpdateTask($taskGroupID: UUID!, $updatedTaskGroup: NewTaskGroup!) {
        updateTaskGroup(taskGroupID: $taskGroupID, updatedTaskGroup: $updatedTaskGroup) {
            ID
            Name
            Tasks {
                ID
                StartTime
                Product {
                    ID
                    Name
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
    }
`;

const updateTaskGroup = async (taskGroupId: string, updatedTaskGroup: UpdatedTaskGroup): Promise<FetchedTaskGroup> => {
  const response = await integrationClient().request<{ updateTaskGroup: FetchedTaskGroup }>(UPDATE_TASK, {
    taskGroupID: taskGroupId,
    updatedTaskGroup
  });

  return response.updateTaskGroup;
};

export default updateTaskGroup;





