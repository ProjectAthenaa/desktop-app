import {ProfileGroupCreation, ProfileGroup} from '../../../../../types/profile';
import createProfileGroupRequest from '../../../../../graphql/integration/handlers/profiles/create-profile-group';

const createProfileGroup = async (event: Electron.IpcMainInvokeEvent, taskGroup: ProfileGroupCreation): Promise<ProfileGroup> => {
  return await createProfileGroupRequest(taskGroup);
};

export default createProfileGroup;
