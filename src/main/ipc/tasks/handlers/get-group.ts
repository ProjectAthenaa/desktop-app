import {Task, TaskGroup} from '../../../../types/task';

interface Group extends TaskGroup {
  Tasks: Task[];
}

export const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<Group> => {
  return {} as Group;
};

export default getGroup;



