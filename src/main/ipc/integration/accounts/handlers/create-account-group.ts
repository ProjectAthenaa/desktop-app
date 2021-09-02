import createAccountGroupRequest from '../../../../../graphql/integration/handlers/accounts/create-account-group';
import {AccountGroup, AccountGroupInput} from '../../../../../types/account';

const createAccountGroup = async (event: Electron.IpcMainInvokeEvent, accountGroup: AccountGroupInput): Promise<AccountGroup> => {
  return await createAccountGroupRequest(accountGroup);
};

export default createAccountGroup;
