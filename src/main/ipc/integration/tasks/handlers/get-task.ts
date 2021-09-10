import getTaskRequest, {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

const getTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<FetchedTask> => {
  return await getTaskRequest(taskId);
};

export default getTask;



