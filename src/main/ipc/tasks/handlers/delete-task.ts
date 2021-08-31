import deleteTaskRequest from '../../../../graphql/integration/handlers/tasks/delete-task';

const deleteTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<string> => {
  return await deleteTaskRequest(taskId);
};

export default deleteTask;

