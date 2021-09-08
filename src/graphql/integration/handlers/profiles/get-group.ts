import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

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
`;

export interface FetchedProfileGroupsProfile {
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

export interface FetchedProfileGroup {
  ID: string;
  Name: string;
  Profiles: FetchedProfileGroupsProfile[];
}


const getGroup = async (groupId: string): Promise<FetchedProfileGroup> => {
  const response = await integrationClient().request<{ getProfileGroup: FetchedProfileGroup }>(GET_GROUP, {
    profileGroupID: groupId
  });

  return response.getProfileGroup;
};

export default getGroup;



