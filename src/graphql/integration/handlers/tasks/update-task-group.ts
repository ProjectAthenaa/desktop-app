import {TaskGroup} from '../../../../types/task';

type UpdatedTaskGroup = {
  Name: string;
};

const updateTaskGroup = async (taskGroupId: string, name: UpdatedTaskGroup): Promise<TaskGroup> => {
  return {} as TaskGroup;
};

export default updateTaskGroup;





