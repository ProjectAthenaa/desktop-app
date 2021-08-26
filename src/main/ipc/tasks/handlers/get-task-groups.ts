import {TaskGroup} from '../../../../types/task';
import getTaskGroupsRequest from '../../../../graphql/integration/handlers/tasks/get-task-groups';

const getTaskGroups = async (event: Electron.IpcMainInvokeEvent): Promise<TaskGroup[]> => {
  console.log('hit getTaskGroups')
  const response = await getTaskGroupsRequest();

  console.log(response);

  return [];
};

export default getTaskGroups;



