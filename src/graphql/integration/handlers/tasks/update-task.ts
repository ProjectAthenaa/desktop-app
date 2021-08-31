import {Task} from '../../../../types/task';

type UpdatedTask = {
  StartTime?: string;
  ProductID: string;
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

const updateTask = async (taskId: string, updatedPayload: UpdatedTask): Promise<Task> => {
  return {} as Task;
};

export default updateTask;




