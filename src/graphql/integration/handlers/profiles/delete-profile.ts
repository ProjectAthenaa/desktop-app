import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_PROFILE = gql`
    mutation DeleteProfile($profileID: UUID!){
        deleteProfile(profileID: $profileID)
    }
`;

const deleteProfile = async (profileId: string): Promise<boolean> => {
  return await integrationClient().request(DELETE_PROFILE, {
    taskID: profileId,
  });
};

export default deleteProfile;

