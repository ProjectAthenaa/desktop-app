import getAccountGroupsRequest from '../../../../../graphql/integration/handlers/accounts/get-account-groups';
import {AccountGroup} from '../../../../../types/account';

const getAccountGroups = async (event: Electron.IpcMainInvokeEvent): Promise<AccountGroup[]> => {
  return await getAccountGroupsRequest();
};

export default getAccountGroups;
