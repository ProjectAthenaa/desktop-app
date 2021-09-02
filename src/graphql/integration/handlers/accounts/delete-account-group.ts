import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_ACCOUNT = gql`
    mutation DeleteAccount($accountGroupID: UUID!){
        deleteAccountGroup(accountGroupID: $accountGroupID)
    }
`;

const deleteAccountGroup = async (accountGroupId: string): Promise<boolean> => {
  const response = await integrationClient().request<{ deleteAccountGroup: boolean }>(DELETE_ACCOUNT, {
    accountGroupID: accountGroupId,
  });

  return response.deleteAccountGroup;
};

export default deleteAccountGroup;

