import deleteProfileRequest from '../../../../../graphql/integration/handlers/profiles/delete-profile';

const deleteProfile = async (event: Electron.IpcMainInvokeEvent, profileId: string): Promise<boolean> => {
  return await deleteProfileRequest(profileId);
};

export default deleteProfile;

