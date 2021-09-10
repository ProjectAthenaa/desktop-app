import getProfileGroupsRequest, {FetchedProfileGroups} from '../../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

const getProfileGroups = async (): Promise<{ groups: FetchedProfileGroups; selectedProfileGroup: FetchedProfileGroup | null }> => {
  return await getProfileGroupsRequest();
};

export default getProfileGroups;



