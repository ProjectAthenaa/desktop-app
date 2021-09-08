import createProfileRequest from '../../../../../graphql/integration/handlers/profiles/create-profile';
import {ProfileCreation} from '../../../../../types/profile';
import {FetchedProfileGroupsProfile} from '../../../../../graphql/integration/handlers/profiles/get-group';


const createProfile = async (event: Electron.IpcMainInvokeEvent, newProfile: ProfileCreation): Promise<FetchedProfileGroupsProfile> => {
  return await createProfileRequest(newProfile);
};

export default createProfile;
