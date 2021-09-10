import { handleTaskUpdates } from '../../../../graphql/tasks/handlers/task-updates';

const ONE_MINUTE = 1000 * 60;

let taskUpdatesSubscription: { unsubscribe: () => void } | null = null;
let interval: NodeJS.Timer | null = null;

export const taskUpdater = (): void => {
  if (interval) clearInterval(interval);
  if (taskUpdatesSubscription) taskUpdatesSubscription.unsubscribe();

  interval = setInterval(async () => {
    taskUpdatesSubscription = await handleTaskUpdates();
  }, ONE_MINUTE * 5);
}

const taskUpdates = (event: Electron.IpcMainInvokeEvent): void => {
  taskUpdater();
};

export default taskUpdates;



