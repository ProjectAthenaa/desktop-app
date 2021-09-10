import getTaskGroupsRequest, {FetchedTaskGroups} from '../../../../../graphql/integration/handlers/tasks/get-task-groups';
import {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

const getTaskGroups = async (): Promise<{ groups: FetchedTaskGroups, selectedTaskGroup: FetchedTaskGroup | null }> => await getTaskGroupsRequest();

export default getTaskGroups;



