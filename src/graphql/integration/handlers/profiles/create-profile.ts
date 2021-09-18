import {gql} from 'graphql-request';
import {ProfileCreation} from '../../../../types/profile';
import {integrationClient} from '../../index';
import {FetchedProfileGroupsProfile} from './get-group';
import encryptWithPub from '../../../../main/util/encrypt-with-pub';

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
  // TODO: make this run in parallel to maximize performance on saves.
  const encryptedBilling = {
    CardHolderName: newProfile.Billing.CardHolderName,
    CardNumber: await encryptWithPub(newProfile.Billing.CardNumber),
    ExpiryMonth: await encryptWithPub(newProfile.Billing.ExpiryMonth),
    ExpiryYear: await encryptWithPub(newProfile.Billing.ExpiryYear),
    CVV: await encryptWithPub(newProfile.Billing.CVV),
  };

  console.log(encryptedBilling);

  const response = await (await integrationClient()).request<{ createProfile: FetchedProfileGroupsProfile }>(CREATE_PROFILE, {
    newProfile: {
      ...newProfile,
      Billing: encryptedBilling,
    }
  });

  return response.createProfile;
};

export default createProfile;
