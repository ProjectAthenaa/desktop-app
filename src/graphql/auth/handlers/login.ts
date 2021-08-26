import {gql} from 'graphql-request';
import {authClient} from '../index';
import {LoginParameters, LoginResponse} from '../../../types/auth';

const LOGIN = gql`
    query LOGIN($key: String!, $params: LoginParameters!){
        login(key: $key, params: $params) {
            Session {
                ID
                HardwareID
            }
            Theme
            IsFirstLogin
        }
    }
`;

const login = async (key: string, params: LoginParameters): Promise<LoginResponse> => {
  const response: {login: LoginResponse} = await authClient.request(LOGIN, {
    key, params
  });

  return response.login;
};

export default login;
