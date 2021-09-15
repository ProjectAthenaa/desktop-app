import {Site, Task, TaskGroup} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

export interface Group extends TaskGroup {
  Tasks: {
    ID: string;
    Name: string;
    Product: {
      ID: string;
      Name: string;
      Site: Site;
    };
    ProxyList: {
      ID: string;
      Name: string;
    };
    ProfileGroup: {
      ID: string;
      Name: string;
    };
  }[];
}

const GET_GROUP = gql`
    query GetGroup ($taskGroupID: UUID!){
        getTaskGroup(taskGroupID: $taskGroupID) {
            ID
            Name
            Tasks {
                ID
                StartTime
                Product {
                    ID
                    Name
                    Site
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

export interface FetchedTaskGroupsTask {
  ID: string;
  StartTime: string;
  Product: {
    ID: string;
    Name: string;
  };
  ProxyList: {
    ID: string;
    Name: string;
  };
  ProfileGroup: {
    ID: string;
    Name: string;
  };
}

export interface FetchedTaskGroup {
  ID: string;
  Name: string;
  Tasks: FetchedTaskGroupsTask[];
}

const getGroup = async (groupId: string): Promise<FetchedTaskGroup> => {
  const response = await integrationClient().request<{ getTaskGroup: FetchedTaskGroup }>(GET_GROUP, {
    taskGroupID: groupId
  });

  return response.getTaskGroup;
};

export default getGroup;



