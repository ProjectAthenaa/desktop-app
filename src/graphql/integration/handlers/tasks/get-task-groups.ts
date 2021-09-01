import {gql} from 'graphql-request';
import {TaskGroup} from '../../../../types/task';
import {integrationClient} from '../../index';

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
    const response = await integrationClient()
      .request<{ getAllTaskGroups: TaskGroup[] }>(GET_TASK_GROUPS);

    return response.getAllTaskGroups;

  } catch (error) {
    console.log('error' , JSON.stringify(error));
    console.log('response', JSON.stringify(error.response));
  }
};

export default getTaskGroups;



