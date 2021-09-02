import updateProfileRequest from '../../../../../graphql/integration/handlers/profiles/update-profile';
import {Profile, ProfileCreation} from '../../../../../types/profile';

const updateProfile = async (event: Electron.IpcMainInvokeEvent, profileId: string, updatedPayload: ProfileCreation): Promise<Profile> => {
  return await updateProfileRequest(profileId, updatedPayload);
};

export default updateProfile;




