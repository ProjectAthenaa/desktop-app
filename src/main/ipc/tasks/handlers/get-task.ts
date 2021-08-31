import {Task} from '../../../../types/task';
import getTaskRequest from '../../../../graphql/integration/handlers/tasks/get-task';

const getTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<Task> => {
  return await getTaskRequest(taskId);
};

export default getTask;



