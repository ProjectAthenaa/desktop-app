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
  return await integrationClient().request(GET_TASK, {
    profileID: profileId
  });
};

export default getProfile;



