import { startTasks as startTasksRequest } from '../../../../graphql/tasks/handlers/start-tasks';

const startTasks = async (event: Electron.IpcMainInvokeEvent, taskIDs: string[]): Promise<boolean> => {
  return await startTasksRequest(taskIDs)
};

export default startTasks;

