import {TaskGroup} from '../../../../types/task';
import getTaskGroupsRequest from '../../../../graphql/integration/tasks/get-task-groups';

export const getTaskGroups = async (event: Electron.IpcMainInvokeEvent): Promise<TaskGroup[]> => {
  console.log('hit getTaskGroups')
  const response = await getTaskGroupsRequest();

  console.log(response);

  return [];
};

export default getTaskGroups;



