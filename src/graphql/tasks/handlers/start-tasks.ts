import {gql} from 'graphql-request';
import {taskClient} from '../index';

const START_TASKS = gql`
    mutation StartTasks($taskIDs: [String!]){
        startTasks(taskIDs: $taskIDs) 
    }
`;

export const startTasks = async (taskIDs: string[]): Promise<boolean> => {
    const response = await taskClient()
      .request<{ startTasks: boolean }>(START_TASKS, {
          taskIDs
      });

    console.log(response, taskIDs);

    return response.startTasks;
};
