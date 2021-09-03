import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type UpdatedTask = {
  taskId: string;
  StartTime?: string;
  ProductID: string;
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

export const updateTaskRequest = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, ...updatedPayload }: UpdatedTask): Promise<Task> => {
    return await ipcRenderer.invoke('updateTask', taskId, updatedPayload) as Task;
  }
);

export const updateTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskUpdating = Status.FULFILLED;

  state.tasks = state.tasks.map(task =>
    task.ID !== action.payload.ID
    ? task
    : action.payload
  );

  toast.success('Task updated.')

  state.statuses.taskUpdating = Status.IDLE;
};

export const updatingTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskUpdating = Status.PENDING;
}

export const undoUpdateTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskUpdating = Status.REJECTED;

  toast.error('Task update failed.');

  state.statuses.taskUpdating = Status.IDLE;
};
