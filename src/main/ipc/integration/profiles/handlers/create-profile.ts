import createProfileRequest from '../../../../../graphql/integration/handlers/profiles/create-profile';
import {Profile, ProfileCreation} from '../../../../../types/profile';


const createProfile = async (event: Electron.IpcMainInvokeEvent, newProfile: ProfileCreation): Promise<Profile> => {
  return await createProfileRequest(newProfile);
};

export default createProfile;
