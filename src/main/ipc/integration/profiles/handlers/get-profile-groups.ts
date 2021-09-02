import getProfileGroupsRequest from '../../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {ProfileGroup} from '../../../../../types/profile';

const getProfileGroups = async (event: Electron.IpcMainInvokeEvent): Promise<ProfileGroup[]> => {
  return getProfileGroupsRequest();
};

export default getProfileGroups;



