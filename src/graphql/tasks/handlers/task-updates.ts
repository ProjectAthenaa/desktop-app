import {createSubscriptionObservable} from '../../../main/util/subscriptions';
import {WS_SERVICE_ENDPOINT} from '../index';
import {gql} from 'graphql-request';
import {DocumentNode} from 'apollo-link';
import {getScheduledTasks} from './get-scheduled-tasks';
import {BrowserWindow, ipcMain} from 'electron';
import { Status } from '../../../types/task';

const TASK_UPDATES = gql`
  subscription TaskUpdates($subscriptionTokens: [String!]!) {
      taskUpdates(subscriptionTokens: $subscriptionTokens) {
          TaskID
          Status
          Error
          Information
      }
  }
`;

export interface TaskStatus {
  TaskID: string;
  Status: Status;
  Error: string;
  Information: Record<string, unknown>;
}

const taskUpdatesObservable = (variables?: Record<string, unknown>) => createSubscriptionObservable(
  WS_SERVICE_ENDPOINT,
  TASK_UPDATES as unknown as DocumentNode,
  variables
);

export const handleTaskUpdates = async (ids: { id?: string; windowId: number; }): Promise<{ unsubscribe: () => void }> => {

  const window = BrowserWindow.fromId(ids.windowId);

  const scheduledTasks = await getScheduledTasks();

  console.log(JSON.stringify(scheduledTasks), 's');

  window.webContents.send('scheduled-tasks-updated', scheduledTasks);

  const taskUpdatesClient = taskUpdatesObservable({
    subscriptionTokens:
      ids.id ? [ids.id, ...scheduledTasks.map(scheduledTask => scheduledTask.SubscriptionToken)]
         : scheduledTasks.map(scheduledTask => scheduledTask.SubscriptionToken)
  });

  const taskUpdatesSubscription = taskUpdatesClient.subscribe({
    next: (e) => {
      console.log(JSON.stringify(e));
      window.webContents.send('scheduled-task-updated', e.data.taskUpdates)
    },
    error: () => {
      taskUpdatesSubscription.unsubscribe();
      handleTaskUpdates(ids);
    }
  });

  return taskUpdatesSubscription;
};
