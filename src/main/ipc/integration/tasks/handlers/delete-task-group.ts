import deleteTaskGroupRequest from '../../../../../graphql/integration/handlers/tasks/delete-task-group';

const deleteTaskGroup = async (event: Electron.IpcMainInvokeEvent, taskGroupId: string): Promise<boolean> => {
  return await deleteTaskGroupRequest(taskGroupId);
};

export default deleteTaskGroup;


