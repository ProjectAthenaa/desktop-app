import getGroupRequest, {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<FetchedTaskGroup> => {
  return await getGroupRequest(groupId);
};

export default getGroup;



