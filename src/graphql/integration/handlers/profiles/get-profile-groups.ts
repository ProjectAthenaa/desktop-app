import {gql} from 'graphql-request';
import {ProfileGroup} from '../../../../types/profile';
import {integrationClient} from '../../index';

const GET_PROFILE_GROUPS = gql`
    {
        getProfileGroups {
            ID
            Name
        }
    }
`;

const getProfileGroups = async (): Promise<ProfileGroup[]> => {
  const response = await integrationClient()
    .request<{ getAllProfileGroups: ProfileGroup[] }>(GET_PROFILE_GROUPS);

  return response.getAllProfileGroups;
};

export default getProfileGroups;



