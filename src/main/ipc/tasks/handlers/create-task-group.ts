import {TaskGroupCreation, TaskGroup} from '../../../../types/task';

const createTaskGroup = async (event: Electron.IpcMainInvokeEvent, taskGroup: TaskGroupCreation): Promise<TaskGroup> => {
  return {} as TaskGroup;
};

export default createTaskGroup;
