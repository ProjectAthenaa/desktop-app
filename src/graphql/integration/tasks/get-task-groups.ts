import {gql} from 'graphql-request';
import {TaskGroup} from '../../../types/task';
import {integrationClient} from '../index';

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
    const response = await integrationClient.request(GET_TASK_GROUPS);
    return response;
  } catch (error) {
    console.error('error' , JSON.stringify(error));
  }

};

export default getTaskGroups;
