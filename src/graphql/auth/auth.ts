import {gql} from 'graphql-request';
import {TaskGroup} from '../../types/task';
import {authClient} from './index';

const LOGIN = gql`
    query LOGIN($key: String!, $params: LoginParameters!){
        login(key: $key, params: $params) {
            Session {
                ID
            }
        }
    }
`;

const auth = async (): Promise<any> => {
  try {
    const { login: { Session: { ID }}} = await authClient.request(LOGIN, {
      key: 'ATH-7d8ed177-52d6-4b11-ac35-22da0712d3d0',
      params: {
        HardwareID: "fucking",
        DeviceType: "Desktop",
        DeviceName: "Desktop",
        OS: "macOS"
      }
    });

    return ID;



    // const response = await fetch('http://api.athenabot.com/integration/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     query: LOGIN,
    //     variables
    //   }),
    //   headers: {
    //     Authorization: 'Bearer 80f347cd-439a-4a2c-89f0-518815f2aa96',
    //     'Content-Type': "application/json"
    //   }
    // });

  } catch (error) {
    console.log('error' , JSON.stringify(error));
    console.log('response', JSON.stringify(await error.response.text()));
  }

};

export default auth;
