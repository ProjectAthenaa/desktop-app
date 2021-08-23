import {Task, TaskCreation} from '../../../../types/task';

export const createTask = async (event: Electron.IpcMainInvokeEvent, task: TaskCreation): Promise<Task> => {
  return {} as Task;
};

export default createTask;
