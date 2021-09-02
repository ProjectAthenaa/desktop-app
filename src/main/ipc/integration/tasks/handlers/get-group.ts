import getGroupRequest, {Group} from '../../../../../graphql/integration/handlers/tasks/get-group';

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<Group> => {
  return await getGroupRequest(groupId);
};

export default getGroup;



