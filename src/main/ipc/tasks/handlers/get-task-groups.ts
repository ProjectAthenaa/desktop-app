import {TaskGroup} from '../../../../types/task';
import getTaskGroupsRequest from '../../../../graphql/integration/handlers/tasks/get-task-groups';

const getTaskGroups = async (event: Electron.IpcMainInvokeEvent): Promise<TaskGroup[]> => await getTaskGroupsRequest();

export default getTaskGroups;



