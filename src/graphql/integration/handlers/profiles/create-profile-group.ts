import {ProfileGroupCreation, ProfileGroup} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';


const CREATE_PROFILE_GROUP = gql`
    mutation CreateProfileGroup($newProfileGroup: NewProfileGroup!){
        createProfileGroup(newGroup: $newProfileGroup) {
            ID
            Name
        }
    }
`;

export const createProfileGroup = async (taskGroup: ProfileGroupCreation): Promise<ProfileGroup> => {
  const response = await integrationClient()
    .request<{ createProfileGroup: ProfileGroup }>(CREATE_PROFILE_GROUP, {
      newProfileGroup: taskGroup
    });
  return response.createProfileGroup;
};

export default createProfileGroup;
