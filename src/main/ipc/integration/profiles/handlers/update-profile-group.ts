import updateProfileGroupRequest from '../../../../../graphql/integration/handlers/profiles/update-profile-group';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

type UpdatedProfileGroup = {
  Name: string;
};

const updateProfileGroup = async (event: Electron.IpcMainInvokeEvent, profileGroupId: string, updatedProfileGroup: UpdatedProfileGroup): Promise<FetchedProfileGroup> => {
  return await updateProfileGroupRequest(profileGroupId, updatedProfileGroup);
};

export default updateProfileGroup;





