import updateAccountGroupRequest from '../../../../../graphql/integration/handlers/accounts/update-account-group';
import {AccountGroup, AccountGroupInput} from '../../../../../types/account';

const updateAccountGroup = async (event: Electron.IpcMainInvokeEvent, accountGroupId: string, updatedAccountGroup: AccountGroupInput): Promise<AccountGroup> => {
  return await updateAccountGroupRequest(accountGroupId, updatedAccountGroup);
};

export default updateAccountGroup;
