import {gql} from 'graphql-request';
import {ProfileCreation} from '../../../../types/profile';
import {integrationClient} from '../../index';
import {FetchedProfileGroupsProfile} from './get-group';

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
                ShippingAddress {
                    AddressLine
                }
                BillingIsShipping
            }
        }
    }
`;

const createProfile = async (newProfile: ProfileCreation): Promise<FetchedProfileGroupsProfile> => {
  const response = await integrationClient().request<{ createProfile: FetchedProfileGroupsProfile }>(CREATE_PROFILE, {
    newProfile
  });
  return response.createProfile;
};

export default createProfile;
