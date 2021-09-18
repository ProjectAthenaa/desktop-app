import {gql} from 'graphql-request';
import { Status } from '../../../types/task';
import {taskClient} from '../index';

const GET_SCHEDULED_TASKS = gql`
    {
        getScheduledTasks {
            ID
            SubscriptionToken
            ControlToken
            StartTime
        }
    }
`;

export interface ScheduledTask {
    ID: string;
    SubscriptionToken: string;
    ControlToken: string;
    StartTime: string;
    Status?: Status;
}

export const getScheduledTasks = async (): Promise<ScheduledTask[]> => {
    const response = await (await taskClient())
      .request<{ getScheduledTasks: ScheduledTask[] }>(GET_SCHEDULED_TASKS);

    return response.getScheduledTasks;
};
