import {gql} from 'graphql-request';
import {Profile, ProfileCreation} from '../../../../types/profile';
import {integrationClient} from '../../index';

const CREATE_PROFILE = gql`
    mutation CreateProfile($newProfile: NewProfile!){
        createProfile(newProfile: $newProfile) {
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

const createProfile = async (newProfile: ProfileCreation): Promise<Profile> => {
  const response = await integrationClient().request<{ createProfile: Profile }>(CREATE_PROFILE, {
    newProfile
  });
  return response.createProfile;
};

export default createProfile;
