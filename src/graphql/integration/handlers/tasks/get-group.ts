import {Task, TaskGroup} from '../../../../types/task';
interface Group extends TaskGroup {
  Tasks: Task[];
}

const getGroup = async (groupId: string): Promise<Group> => {
  return {} as Group;
};

export default getGroup;



