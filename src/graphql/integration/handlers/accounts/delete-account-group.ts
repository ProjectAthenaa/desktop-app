import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_ACCOUNT = gql`
    mutation DeleteAccount($accountGroupID: UUID!){
        deleteAccountGroup(accountGroupID: $accountGroupID)
    }
`;

const deleteAccountGroup = async (profileId: string): Promise<boolean> => {
  const response = await integrationClient().request<{ deleteAccountGroup: boolean }>(DELETE_ACCOUNT, {
    taskID: profileId,
  });

  return response.deleteAccountGroup;
};

export default deleteAccountGroup;

