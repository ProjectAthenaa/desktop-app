import {TaskGroup} from '../../../../types/task';

export const getTaskGroups = async (event: Electron.IpcMainInvokeEvent): Promise<TaskGroup[]> => {
  return [];
};

export default getTaskGroups;



