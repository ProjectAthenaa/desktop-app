import { handleTaskUpdates } from '../../../../graphql/tasks/handlers/task-updates';

const ONE_MINUTE = 1000 * 60;

let taskUpdatesSubscription: { unsubscribe: () => void } | null = null;
let interval: NodeJS.Timer | null = null;
let init = false;

export const taskUpdater = async (ids: { ids?: string[]; windowId: number; }): Promise<void> => {
  if (interval) clearInterval(interval);

  if (taskUpdatesSubscription) taskUpdatesSubscription.unsubscribe();

  if (!init || ids) {
    taskUpdatesSubscription = await handleTaskUpdates(ids);
    console.log('started');
    init = true;
  }

  interval = setInterval(async () => {
    taskUpdatesSubscription = await handleTaskUpdates(ids);
    console.log('reset');
  }, ONE_MINUTE * 5);
}

const taskUpdates = async (event: Electron.IpcMainInvokeEvent): Promise<void> => {
  await taskUpdater({ windowId: event.frameId });
};

export default taskUpdates;



