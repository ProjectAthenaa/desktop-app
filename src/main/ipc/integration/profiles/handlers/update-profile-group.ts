import {ProfileGroup} from '../../../../../types/profile';
import updateProfileGroupRequest from '../../../../../graphql/integration/handlers/profiles/update-profile-group';

type UpdatedProfileGroup = {
  Name: string;
};

const updateProfileGroup = async (event: Electron.IpcMainInvokeEvent, profileGroupId: string, updatedProfileGroup: UpdatedProfileGroup): Promise<ProfileGroup> => {
  return await updateProfileGroupRequest(profileGroupId, updatedProfileGroup);
};

export default updateProfileGroup;





