import {Task, TaskCreation} from '../../../../types/task';
import createTaskRequest from '../../../../graphql/integration/handlers/tasks/create-task';

const createTask = async (event: Electron.IpcMainInvokeEvent, task: TaskCreation): Promise<Task> => {
  return await createTaskRequest(task);
};

export default createTask;
