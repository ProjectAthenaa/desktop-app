import getGroupRequest, {Group} from '../../../../../graphql/integration/handlers/profiles/get-group';

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<Group> => {
  return await getGroupRequest(groupId);
};

export default getGroup;



