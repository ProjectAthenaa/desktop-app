import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getTaskRequest = createAsyncThunk(
  'tasks/getTask',
  async (taskId: string): Promise<Task> => {
    return await ipcRenderer.invoke('getTask', taskId) as Task;
  }
);

export const fetchingTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskFetching = Status.PENDING;
};

export const getTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskFetching = Status.FULFILLED;
  state.selectedTask = action.payload;
  state.statuses.taskFetching = Status.IDLE;
};

export const failedGetTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskFetching = Status.REJECTED;

  toast.error(`Failed to load your task at this time.`);

  state.statuses.taskFetching = Status.IDLE;
};
