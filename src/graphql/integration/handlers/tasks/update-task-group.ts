import {TaskGroup} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

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

const updateTaskGroup = async (taskGroupId: string, updatedTaskGroup: UpdatedTaskGroup): Promise<TaskGroup> => {
  return await integrationClient().request(UPDATE_TASK, {
    taskGroupID: taskGroupId,
    updatedTaskGroup
  });
};

export default updateTaskGroup;





