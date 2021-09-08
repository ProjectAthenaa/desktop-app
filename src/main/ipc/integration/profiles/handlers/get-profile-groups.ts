import getProfileGroupsRequest, {FetchedProfileGroups} from '../../../../../graphql/integration/handlers/profiles/get-profile-groups';

const getProfileGroups = async (event: Electron.IpcMainInvokeEvent): Promise<FetchedProfileGroups> => {
  return await getProfileGroupsRequest();
};

export default getProfileGroups;



