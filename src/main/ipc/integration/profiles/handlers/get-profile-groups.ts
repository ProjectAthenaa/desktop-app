import getProfileGroupsRequest, {FetchedProfileGroups} from '../../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {FetchedProfileGroupsProfile} from '../../../../../graphql/integration/handlers/profiles/get-group';

const getProfileGroups = async (event: Electron.IpcMainInvokeEvent): Promise<{ groups: FetchedProfileGroups, selectedProfileGroup: FetchedProfileGroupsProfile | null }> => {
  return await getProfileGroupsRequest();
};

export default getProfileGroups;



