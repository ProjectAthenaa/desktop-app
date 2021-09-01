import {Task} from '../../../../types/task';
import updateTaskRequest from '../../../../graphql/integration/handlers/tasks/update-task';

type UpdatedTask = {
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
};

const updateTask = async (event: Electron.IpcMainInvokeEvent, taskId: string, updatedPayload: UpdatedTask): Promise<Task> => {
  return await updateTaskRequest(taskId, updatedPayload);
};

export default updateTask;




