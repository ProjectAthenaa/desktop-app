import { handleTaskUpdates } from '../../../../graphql/tasks/handlers/task-updates';


let taskUpdatesSubscription: { unsubscribe: () => void } | null;
const taskUpdates = async (event: Electron.IpcMainInvokeEvent) => {
  if (taskUpdatesSubscription) taskUpdatesSubscription.unsubscribe();

  taskUpdatesSubscription = await handleTaskUpdates();
};

export default taskUpdates;



