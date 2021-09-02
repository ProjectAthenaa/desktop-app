import {ProfileGroup} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

type UpdatedProfileGroup = {
  Name: string;
};

const UPDATE_GROUP = gql`
    mutation UpdateProfileGroup($profileGroupID: UUID!, $updatedProfileGroup: NewProfileGroup!) {
        updateProfileGroup(groupID: $profileGroupID, updatedGroup: $updatedProfileGroup) {
            ID
            Name
        }
    }
`;

const updateProfileGroup = async (profileGroupId: string, updatedProfileGroup: UpdatedProfileGroup): Promise<ProfileGroup> => {
  const response = await integrationClient().request<{ updateProfileGroup: ProfileGroup }>(UPDATE_GROUP, {
    profileGroupID: profileGroupId,
    updatedProfileGroup
  });

  return response.updateProfileGroup;
};

export default updateProfileGroup;





