import {TaskGroup} from '../../../../types/task';

type UpdatedTaskGroup = {
  taskGroupId: string;
  Name: string;
};

export const updateTaskGroup = async (event: Electron.IpcMainInvokeEvent, taskGroupId: string, updatedPayload: UpdatedTaskGroup): Promise<TaskGroup> => {
  return {} as TaskGroup;
};

export default updateTaskGroup;





