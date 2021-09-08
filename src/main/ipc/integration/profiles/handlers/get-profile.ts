import getProfileRequest, {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';

const getProfile = async (event: Electron.IpcMainInvokeEvent, profileId: string): Promise<FetchedProfile> => {
  return await getProfileRequest(profileId);
};

export default getProfile;



