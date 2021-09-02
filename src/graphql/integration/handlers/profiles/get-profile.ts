import {Profile} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const GET_TASK = gql`
    query GetProfile($profileID: UUID!) {
        getProfile(profileID: $profileID) {
            ID
            Name
            Email
            Shipping {
                ID
                FirstName
                LastName
                PhoneNumber
                BillingIsShipping
                BillingAddress {
                    ID
                    AddressLine
                    AddressLine2
                    Country
                    State
                    City
                    ZIP
                    StateCode
                }
                ShippingAddress {
                    ID
                    AddressLine
                    AddressLine2
                    Country
                    State
                    City
                    ZIP
                    StateCode
                }
            }
        }
    }
`;

const getProfile = async (profileId: string): Promise<Profile> => {
  const response = await integrationClient().request<{ getProfile: Profile }>(GET_TASK, {
    profileID: profileId
  });

  return response.getProfile;
};

export default getProfile;



