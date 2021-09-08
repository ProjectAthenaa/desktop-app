import updateProfileRequest from '../../../../../graphql/integration/handlers/profiles/update-profile';
import {ProfileCreation} from '../../../../../types/profile';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';

const updateProfile = async (event: Electron.IpcMainInvokeEvent, profileId: string, updatedPayload: ProfileCreation): Promise<FetchedProfile> => {
  return await updateProfileRequest(profileId, updatedPayload);
};

export default updateProfile;




