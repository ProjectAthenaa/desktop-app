import {taskUpdater} from './task-updates';

const reSyncTasks = async (event: Electron.IpcMainInvokeEvent, ids: string[]): Promise<void> => {
  const windowId = event.frameId;

  await taskUpdater({ids, windowId});
};

export default reSyncTasks;



