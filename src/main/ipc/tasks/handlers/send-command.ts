import {taskUpdater} from './task-updates';
import {Command} from '../../../../types/task';
import { sendCommand as sendCommandRequest } from '../../../../graphql/tasks/handlers/send-command';

const sendCommand = async (event: Electron.IpcMainInvokeEvent, controlToken: string, command?: Command): Promise<void> => {
  if (command) await sendCommandRequest(controlToken, command);

  await taskUpdater({ windowId: event.frameId });
};

export default sendCommand;



