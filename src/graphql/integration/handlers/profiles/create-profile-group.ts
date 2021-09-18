import {ProfileGroupCreation} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedProfileGroup} from './get-group';


const CREATE_PROFILE_GROUP = gql`
    mutation CreateProfileGroup($newProfileGroup: NewProfileGroup!){
        createProfileGroup(newGroup: $newProfileGroup) {
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

export const createProfileGroup = async (taskGroup: ProfileGroupCreation): Promise<FetchedProfileGroup> => {
  const response = await (await integrationClient())
    .request<{ createProfileGroup: FetchedProfileGroup }>(CREATE_PROFILE_GROUP, {
      newProfileGroup: taskGroup
    });

  return response.createProfileGroup;
};

export default createProfileGroup;
