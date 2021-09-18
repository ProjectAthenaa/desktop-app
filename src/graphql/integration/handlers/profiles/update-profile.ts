import {ProfileCreation} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedProfile} from './get-profile';

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($profileID: UUID!, $updatedProfile: NewProfile!) {
        updateProfile(profileID: $profileID, updatedProfile: $updatedProfile) {
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

const updateProfile = async (profileId: string, updatedPayload: ProfileCreation): Promise<FetchedProfile> => {
  const response = await (await integrationClient()).request<{ updateProfile: FetchedProfile }>(UPDATE_PROFILE, {
    profileID: profileId,
    updatedProfile: updatedPayload,
  });

  return response.updateProfile;
};

export default updateProfile;




