import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {AccountGroup, AccountGroupInput} from '../../../../types/account';

const CREATE_ACCOUNT_GROUP = gql`
    mutation CreateAccountGroup($newAccountGroup: AccountGroupInput!){
        createAccountGroup(newAccountGroup: $newAccountGroup) {
            ID
            Name
            Accounts
            Site
        }
    }
`;

export const createAccountGroup = async (accountGroup: AccountGroupInput): Promise<AccountGroup> => {
  const response = await integrationClient()
    .request<{ createAccountGroup: AccountGroup }>(CREATE_ACCOUNT_GROUP, {
      newAccountGroup: accountGroup,
    });
  return response.createAccountGroup;
};

export default createAccountGroup;
