import {TaskGroup} from '../../../../types/task';
import updateTaskGroupRequest from '../../../../graphql/integration/handlers/tasks/update-task-group';

type UpdatedTaskGroup = {
  Name: string;
};

const updateTaskGroup = async (event: Electron.IpcMainInvokeEvent, taskGroupId: string, updatedPayload: UpdatedTaskGroup): Promise<TaskGroup> => {
  return await updateTaskGroupRequest(taskGroupId, updatedPayload);
};

export default updateTaskGroup;





