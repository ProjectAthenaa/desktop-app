import {Profile, ProfileGroup} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {AccountGroup} from '../../../../types/account';

const GET_GROUP = gql`
    query GetGroup ($accountGroupID: UUID!){
        getAccountGroup(accountGroupID: $accountGroupID) {
            ID
            Name
            Accounts
        }
    }
`

const getGroup = async (groupId: string): Promise<AccountGroup> => {
  const response = await integrationClient().request<{ getAccountGroup: AccountGroup }>(GET_GROUP, {
    accountGroupID: groupId
  });

  return response.getAccountGroup;
};

export default getGroup;



