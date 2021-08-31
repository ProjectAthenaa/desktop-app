import {Task, TaskGroup} from '../../../../types/task';
import getGroupRequest from '../../../../graphql/integration/handlers/tasks/get-group';
interface Group extends TaskGroup {
  Tasks: Task[];
}

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<Group> => {
  return await getGroupRequest(groupId);
};

export default getGroup;



