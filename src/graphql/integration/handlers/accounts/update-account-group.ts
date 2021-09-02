import {AccountGroup} from '../../../../types/account';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const UPDATE_GROUP = gql`
    mutation UpdateAccountGroup($accountGroupID: UUID!, $updatedAccountGroup: AccountGroupInput!) {
        updateAccountGroup(accountGroupID: $accountGroupID, updatedAccountGroup: $updatedAccountGroup) {
            ID
            Name
        }
    }
`;

const updateAccountGroup = async (accountGroupId: string, updatedAccountGroup: AccountGroup): Promise<AccountGroup> => {
  const response = await integrationClient().request<{ updateAccountGroup: AccountGroup }>(UPDATE_GROUP, {
    accountGroupID: accountGroupId,
    updatedAccountGroup
  });

  return response.updateAccountGroup;
};

export default updateAccountGroup;





