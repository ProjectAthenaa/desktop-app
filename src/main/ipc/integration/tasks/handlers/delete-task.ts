import deleteTaskRequest from '../../../../../graphql/integration/handlers/tasks/delete-task';

const deleteTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<string> => {
  await deleteTaskRequest(taskId)

  return taskId;
};

export default deleteTask;

