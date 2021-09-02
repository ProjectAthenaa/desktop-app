import deleteProfileGroupRequest from '../../../../../graphql/integration/handlers/profiles/delete-profile-group'

const deleteProfileGroup = async (event: Electron.IpcMainInvokeEvent, profileGroupId: string): Promise<boolean> => {
  return await deleteProfileGroupRequest(profileGroupId);
};

export default deleteProfileGroup;


