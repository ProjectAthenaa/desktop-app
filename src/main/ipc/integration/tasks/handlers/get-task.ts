import {Task} from '../../../../../types/task';
import getTaskRequest, {RetrievedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

const getTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<RetrievedTask> => {
  return await getTaskRequest(taskId);
};

export default getTask;



