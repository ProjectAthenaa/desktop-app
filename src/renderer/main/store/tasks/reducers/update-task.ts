import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

type UpdatedTask = {
  taskId: string;
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
};

export const updateTaskRequest = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, ...updatedPayload }: UpdatedTask): Promise<FetchedTask> => {
    return await ipcRenderer.invoke('updateTask', taskId, updatedPayload);;
  }
);

export const updateTask = (state: Draft<TasksState>, action: PayloadAction<FetchedTask>): void => {
  state.statuses.taskUpdating = Status.FULFILLED;

  state.tasks = state.tasks.map(task =>
    task.ID !== action.payload.ID
    ? task
    : action.payload
  );
  state.selectedTaskGroup.Tasks = state.selectedTaskGroup.Tasks.map(task =>
    task.ID !== action.payload.ID
      ? task
      : action.payload
  );

  toast.success('Task updated.')

  state.statuses.taskUpdating = Status.IDLE;
};

export const updatingTask = (state: Draft<TasksState>): void => {
  state.statuses.taskUpdating = Status.PENDING;
}

export const undoUpdateTask = (state: Draft<TasksState>): void => {
  state.statuses.taskUpdating = Status.REJECTED;

  toast.error('Task update failed.');

  state.statuses.taskUpdating = Status.IDLE;
};
