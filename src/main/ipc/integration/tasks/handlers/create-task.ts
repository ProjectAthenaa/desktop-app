import {TaskCreation} from '../../../../../types/task';
import createTaskRequest from '../../../../../graphql/integration/handlers/tasks/create-task';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

const createTask = async (event: Electron.IpcMainInvokeEvent, task: TaskCreation): Promise<FetchedTask> => {
  return await createTaskRequest(task);
};

export default createTask;
