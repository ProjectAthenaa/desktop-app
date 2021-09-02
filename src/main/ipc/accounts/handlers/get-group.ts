import getGroupRequest from '../../../../graphql/integration/handlers/accounts/get-group';
import {AccountGroup} from '../../../../types/account';

const getGroup = async (event: Electron.IpcMainInvokeEvent, groupId: string): Promise<AccountGroup> => {
  return await getGroupRequest(groupId);
};

export default getGroup;
