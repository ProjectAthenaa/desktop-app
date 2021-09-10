import updateTaskRequest from '../../../../../graphql/integration/handlers/tasks/update-task';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

type UpdatedTask = {
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
};

const updateTask = async (event: Electron.IpcMainInvokeEvent, taskId: string, updatedPayload: UpdatedTask): Promise<FetchedTask> => {
  return await updateTaskRequest(taskId, updatedPayload);
};

export default updateTask;




