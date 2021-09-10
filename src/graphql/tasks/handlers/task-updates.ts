import {createSubscriptionObservable} from '../../../main/util/subscriptions';
import {WS_SERVICE_ENDPOINT} from '../index';
import {gql} from 'graphql-request';
import {DocumentNode} from 'apollo-link';
import {getScheduledTasks} from './get-scheduled-tasks';
import {ipcMain} from 'electron';
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

export const handleTaskUpdates = async (): Promise<{ unsubscribe: () => void }> => {
  const scheduledTasks = await getScheduledTasks();
  ipcMain.emit('scheduled-tasks-updated', scheduledTasks);

  const taskUpdatesClient = taskUpdatesObservable({
    subscriptionTokens: scheduledTasks.map(scheduledTask => scheduledTask.SubscriptionToken)
  });

  const taskUpdatesSubscription = taskUpdatesClient.subscribe({
    next: (e) => ipcMain.emit('scheduled-task-updated', e),
    error: () => {
      taskUpdatesSubscription.unsubscribe();
      handleTaskUpdates();
    }
  });

  return taskUpdatesSubscription;
};
