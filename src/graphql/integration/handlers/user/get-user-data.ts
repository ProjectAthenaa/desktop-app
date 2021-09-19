import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {User} from '../../../../types/user';

const GET_USER_DATA = gql`
    {
        getUserData {
            ID
            Theme
            DiscordAvatar
            DiscordDiscriminator
            DiscordUsername
            DiscordID
        }
    }
`;

const getUserData = async (): Promise<User> => {
  const response = await (await integrationClient()).request<{ getUserData: User }>(GET_USER_DATA);

  return response.getUserData;
};

export default getUserData;



