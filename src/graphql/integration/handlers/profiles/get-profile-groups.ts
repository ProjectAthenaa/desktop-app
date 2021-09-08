import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedProfileGroupsProfile} from './get-group';

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
    query GetFirstProfileGroup($profileID: UUID!) {
        getProfile(profileID: $profileID) {
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
`;

export type FetchedProfileGroups = Array<{
  ID: string;
  Name: string;
  Profiles: { ID: string; }[];
}>

const getProfileGroups = async (): Promise<{ groups: FetchedProfileGroups, selectedProfileGroup: FetchedProfileGroupsProfile | null }> => {
  const response = await integrationClient()
    .request<{ getProfileGroups: FetchedProfileGroups }>(GET_PROFILE_GROUPS);

  if (response.getProfileGroups.length === 0) return {
    groups: response.getProfileGroups,
    selectedProfileGroup: null
  }

  const firstProfileResponse = await integrationClient()
    .request<{ getProfile: FetchedProfileGroupsProfile }>(GET_FIRST_PROFILE_GROUP);

  return {
    groups: response.getProfileGroups,
    selectedProfileGroup: firstProfileResponse.getProfile,
  };
};

export default getProfileGroups;



