import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_ACCOUNT = gql`
    mutation DeleteAccount($profileID: UUID!){
        deleteAccount(profileID: $profileID)
    }
`;

const deleteAccountGroup = async (profileId: string): Promise<boolean> => {
  return await integrationClient().request(DELETE_ACCOUNT, {
    taskID: profileId,
  });
};

export default deleteAccountGroup;

