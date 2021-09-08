import getGroupRequest, {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<FetchedProfileGroup> => {
  return await getGroupRequest(groupId);
};

export default getGroup;



