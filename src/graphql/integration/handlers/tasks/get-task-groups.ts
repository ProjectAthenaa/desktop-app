import {gql} from 'graphql-request';
import {TaskGroup} from '../../../../types/task';
import {integrationClient} from '../../index';
import {FetchedTaskGroup, FetchedTaskGroupsTask} from './get-group';
import {FetchedProfileGroupsProfile} from '../profiles/get-group';

const GET_TASK_GROUPS = gql`
    {
        getAllTaskGroups {
            ID
            Name
            Tasks {
                ID
            }
        }
    }
`;

const GET_FIRST_TASK_GROUP = gql`
    query GetFirstTaskGroup($taskGroupID: UUID!) {
        getTaskGroup(taskGroupID: $taskGroupID) {
            ID
            Name
            Tasks {
                ID
                StartTime
                Product {
                    ID
                    Name
                }
                ProxyList {
                    ID
                    Name
                }
                ProfileGroup {
                    ID
                    Name
                }
            }
        }
    }
`;

export interface FetchedTaskGroupSlim {
  ID: string;
  Name: string;
  Tasks: { ID: string; }[];
}

export type FetchedTaskGroups = Array<FetchedTaskGroupSlim>

const getTaskGroups = async (): Promise<{ groups: FetchedTaskGroups, selectedTaskGroup: FetchedTaskGroup | null }> => {
  const response = await integrationClient()
    .request<{ getAllTaskGroups: FetchedTaskGroups }>(GET_TASK_GROUPS);

  if (response.getAllTaskGroups.length === 0) return {
    groups: response.getAllTaskGroups,
    selectedTaskGroup: null,
  };

  const firstTaskResponse = await integrationClient()
    .request<{ getTaskGroup: FetchedTaskGroup }>(GET_FIRST_TASK_GROUP, {
      taskGroupID: response.getAllTaskGroups[0].ID
    });

  return {
    groups: response.getAllTaskGroups,
    selectedTaskGroup: firstTaskResponse.getTaskGroup,
  };
};

export default getTaskGroups;



