import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedProfileGroup} from './get-group';

type UpdatedProfileGroup = {
  Name: string;
};

const UPDATE_GROUP = gql`
    mutation UpdateProfileGroup($profileGroupID: UUID!, $updatedProfileGroup: NewProfileGroup!) {
        updateProfileGroup(groupID: $profileGroupID, updatedGroup: $updatedProfileGroup) {
            ID
            Name
            Profiles {
                ID
                Name
                Email
                Shipping {
                    ID
                    FirstName
                    LastName
                    PhoneNumber
                    ShippingAddress {
                        AddressLine
                    }
                    BillingIsShipping
                }
            }
        }
    }
`;

const updateProfileGroup = async (profileGroupId: string, updatedProfileGroup: UpdatedProfileGroup): Promise<FetchedProfileGroup> => {
  const response = await (await integrationClient()).request<{ updateProfileGroup: FetchedProfileGroup }>(UPDATE_GROUP, {
    profileGroupID: profileGroupId,
    updatedProfileGroup
  });

  return response.updateProfileGroup;
};

export default updateProfileGroup;





