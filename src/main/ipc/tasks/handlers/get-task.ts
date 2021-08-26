import {Task} from '../../../../types/task';

const getTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<Task> => {
  return {} as Task;
};

export default getTask;



