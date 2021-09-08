import {ProfileGroupCreation} from '../../../../../types/profile';
import createProfileGroupRequest from '../../../../../graphql/integration/handlers/profiles/create-profile-group';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

const createProfileGroup = async (event: Electron.IpcMainInvokeEvent, taskGroup: ProfileGroupCreation): Promise<FetchedProfileGroup> => {
  return await createProfileGroupRequest(taskGroup);
};

export default createProfileGroup;
