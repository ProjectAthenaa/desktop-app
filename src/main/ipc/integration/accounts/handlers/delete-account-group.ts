import deleteAccountGroupRequest from '../../../../../graphql/integration/handlers/accounts/delete-account-group';

const deleteAccountGroup = async (event: Electron.IpcMainInvokeEvent, accountGroupId: string): Promise<boolean> => {
  return await deleteAccountGroupRequest(accountGroupId);
};

export default deleteAccountGroup;
