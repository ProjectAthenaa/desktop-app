import {Profile} from '../../../../../types/profile';
import getProfileRequest from '../../../../../graphql/integration/handlers/profiles/get-profile';

const getProfile = async (event: Electron.IpcMainInvokeEvent, profileId: string): Promise<Profile> => {
  return await getProfileRequest(profileId);
};

export default getProfile;



