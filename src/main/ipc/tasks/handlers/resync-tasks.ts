import {taskUpdater} from './task-updates';

const reSyncTasks = async (event: Electron.IpcMainInvokeEvent, id: string): Promise<void> => {
  const windowId = event.frameId;

  await taskUpdater({id, windowId});
};

export default reSyncTasks;



