import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {AccountGroup} from '../../../../types/account';

const GET_ACCOUNT_GROUPS = gql`
    {
        getAllAccountGroups {
            ID
            Name
            Accounts
            Site
        }
    }
`;

const getAccountGroups = async (): Promise<AccountGroup[]> => {
  const response = await integrationClient()
    .request<{ getAllAccountGroups: AccountGroup[] }>(GET_ACCOUNT_GROUPS);

  return response.getAllAccountGroups;
};

export default getAccountGroups;



