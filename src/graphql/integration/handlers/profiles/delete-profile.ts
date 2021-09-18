import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_PROFILE = gql`
    mutation DeleteProfile($profileID: UUID!){
        deleteProfile(profileID: $profileID)
    }
`;

const deleteProfile = async (profileId: string): Promise<boolean> => {
  const response = await (await integrationClient()).request<{ deleteProfile: boolean }>(DELETE_PROFILE, {
    profileID: profileId,
  });

  return response.deleteProfile;
};

export default deleteProfile;

