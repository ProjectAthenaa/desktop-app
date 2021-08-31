import {TaskGroupCreation, TaskGroup} from '../../../../types/task';
import createTaskGroupRequest from '../../../../graphql/integration/handlers/tasks/create-task-group';

const createTaskGroup = async (event: Electron.IpcMainInvokeEvent, taskGroup: TaskGroupCreation): Promise<TaskGroup> => {
  return await createTaskGroupRequest(taskGroup);
};

export default createTaskGroup;
