import {Task} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedTask} from './get-task';

type UpdatedTask = {
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
};

const UPDATE_TASK = gql`
    mutation UpdateTask($taskID: UUID!, $updatedTask: UpdatedTask!) {
        updateTask(taskID: $taskID, updatedTask: $updatedTask) {
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

const updateTask = async (taskId: string, updatedPayload: UpdatedTask): Promise<FetchedTask> => {
  const response = await integrationClient().request<{ updateTask: FetchedTask }>(UPDATE_TASK, {
    taskID: taskId,
    updatedTask: {
      StartTime: updatedPayload.StartTime
        ? updatedPayload.StartTime
        : undefined,
      ProductID: updatedPayload.ProductID
        ? updatedPayload.ProductID
        : undefined,
      ProxyListID: updatedPayload.ProxyListID
        ? updatedPayload.ProxyListID
        : undefined,
      ProfileGroupID: updatedPayload.ProfileGroupID
        ? updatedPayload.ProfileGroupID
        : undefined,
      TaskGroupID: updatedPayload.TaskGroupID
        ? updatedPayload.TaskGroupID
        : undefined,
    }
  });

  return response.updateTask;
};

export default updateTask;




