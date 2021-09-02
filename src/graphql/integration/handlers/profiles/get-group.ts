import {Profile, ProfileGroup} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

export interface Group {
  ID: string;
  Name: string;
  Profiles: {
    ID: string;
    Name: string;
    Email: string;
    Shipping: {
      ID: string;
      FirstName: string;
      LastName: string;
      PhoneNumber: string;
      ShippingAddress: {
        AddressLine: string;
      }
      BillingIsShipping: boolean;
    }
  }
}

const GET_GROUP = gql`
    query GetGroup ($profileGroupID: UUID!){
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
`

const getGroup = async (groupId: string): Promise<Group> => {
  const response = await integrationClient().request<{ getProfileGroup: Group }>(GET_GROUP, {
    profileGroupID: groupId
  });

  return response.getProfileGroup;
};

export default getGroup;



