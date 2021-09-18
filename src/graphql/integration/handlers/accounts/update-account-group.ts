import {AccountGroup, AccountGroupInput} from '../../../../types/account';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const UPDATE_GROUP = gql`
    mutation UpdateAccountGroup($accountGroupID: UUID!, $updatedAccountGroup: AccountGroupInput!) {
        updateAccountGroup(accountGroupID: $accountGroupID, updatedAccountGroup: $updatedAccountGroup) {
            ID
            Name
            Accounts
            Site
        }
    }
`;

const updateAccountGroup = async (accountGroupId: string, updatedAccountGroup: AccountGroupInput): Promise<AccountGroup> => {
  const response = await (await integrationClient()).request<{ updateAccountGroup: AccountGroup }>(UPDATE_GROUP, {
    accountGroupID: accountGroupId,
    updatedAccountGroup
  });

  return response.updateAccountGroup;
};

export default updateAccountGroup;
