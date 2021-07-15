//TODO: remove me
import {ipcMain} from 'electron';
import { captureException, startTransaction } from '@sentry/node';

ipcMain.handle('ping', () => {
  const transaction = startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });

  try {
    throw Error('Fake test issue');
  } catch (e) {
    captureException(e);
  } finally {
    transaction.finish();
  }
  return "pong";
});
