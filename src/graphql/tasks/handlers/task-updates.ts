import {createSubscriptionObservable} from '../../../main/util/subscriptions';
import {WS_SERVICE_ENDPOINT} from '../index';
import {gql} from 'graphql-request';
import {DocumentNode, FetchResult} from 'apollo-link';
import {getScheduledTasks} from './get-scheduled-tasks';
import {BrowserWindow} from 'electron';
import { Status } from '../../../types/task';
import {Observable} from 'subscriptions-transport-ws';

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

type OT =  Observable<FetchResult<{[p: string]: unknown}, Record<string, unknown>, Record<string, unknown>>>;

export const handleTaskUpdates = async (ids: { ids?: string[]; windowId: number; }): Promise<{ unsubscribe: () => void }> => {
  const window = BrowserWindow.fromId(ids.windowId);
  let taskUpdatesClient: OT;

  if (ids.ids) {
    taskUpdatesClient = taskUpdatesObservable({ subscriptionTokens: ids.ids });
  } else {
    const scheduledTasks = await getScheduledTasks();
    taskUpdatesClient = taskUpdatesObservable({ subscriptionTokens: scheduledTasks.map(sT => sT.SubscriptionToken)})
    window.webContents.send('scheduled-tasks-updated', scheduledTasks);
  }

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
