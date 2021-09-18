import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_PROFILE_GROUP = gql`
    mutation DeleteProfileGroup($profileGroupID: UUID!) {
        deleteProfileGroup(groupID: $profileGroupID)
    }
`;


const deleteProfileGroup = async (profileGroupId: string): Promise<boolean> => {
  const response = await (await integrationClient())
    .request<{ deleteProfileGroup: boolean }>(DELETE_PROFILE_GROUP, { profileGroupID: profileGroupId });

  return response.deleteProfileGroup;
};

export default deleteProfileGroup;


