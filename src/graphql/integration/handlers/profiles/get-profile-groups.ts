import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedProfileGroup, FetchedProfileGroupsProfile} from './get-group';

const GET_PROFILE_GROUPS = gql`
    {
        getProfileGroups {
            ID
            Name
            Profiles {
                ID
            }
        }
    }
`;

const GET_FIRST_PROFILE_GROUP = gql`
    query GetFirstProfileGroup($profileGroupID: UUID!) {
        getProfileGroup(profileGroupID: $profileGroupID) {
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

export interface FetchedProfileGroupSlim {
  ID: string;
  Name: string;
  Profiles: { ID: string; }[];
}

export type FetchedProfileGroups = Array<FetchedProfileGroupSlim>

const getProfileGroups = async (): Promise<{ groups: FetchedProfileGroups, selectedProfileGroup: FetchedProfileGroup | null }> => {
  const response = await integrationClient()
    .request<{ getProfileGroups: FetchedProfileGroups }>(GET_PROFILE_GROUPS);

  if (response.getProfileGroups.length === 0) return {
    groups: response.getProfileGroups,
    selectedProfileGroup: null
  };

  const firstProfileResponse = await integrationClient()
    .request<{ getProfileGroup: FetchedProfileGroup }>(GET_FIRST_PROFILE_GROUP, {
      profileGroupID: response.getProfileGroups[0].ID
    });

  return {
    groups: response.getProfileGroups,
    selectedProfileGroup: firstProfileResponse.getProfileGroup,
  };
};

export default getProfileGroups;



