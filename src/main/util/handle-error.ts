import * as Sentry from '@sentry/node'
import {ipcMain} from 'electron';

export const handleError = (error: unknown, message: string, metadata?: Record<string, unknown>) => {
  Sentry.captureException(error);
  ipcMain.emit('error', { message, metadata });
};
