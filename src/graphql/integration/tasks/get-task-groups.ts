import {gql, request} from 'graphql-request';
import {TaskGroup} from '../../../types/task';
import {integrationClient, SERVICE_ENDPOINT} from '../index';
import auth from '../../auth/auth';



const GET_TASK_GROUPS = gql`
    {
        getAllTaskGroups {
            ID
            Name
        }
    }
`;

const getTaskGroups = async (): Promise<TaskGroup[]> => {
  try {
    // const response = await integrationClient.request(GET_TASK_GROUPS);
    const sessionID = await auth();

    console.log(sessionID)

    const response = await request(SERVICE_ENDPOINT, GET_TASK_GROUPS, {}, {
      Authorization: `Bearer ${sessionID}`
    });

    console.log(response);

    return [];

  } catch (error) {
    console.log('error' , JSON.stringify(error));
    console.log('response', JSON.stringify(error.response));
  }

};

export default getTaskGroups;



