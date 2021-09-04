import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getTaskGroupsRequest = createAsyncThunk(
  'tasks/getTaskGroups',
  async (): Promise<TaskGroup[]> => {
    return await ipcRenderer.invoke('getTaskGroups');
  }
);

export const fetchingTaskGroups = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>) => {
  state.statuses.taskGroupFetching = Status.PENDING;
};

export const getTaskGroups = (state: Draft<TasksState>, action: PayloadAction<TaskGroup[]>) => {
  state.statuses.taskGroupFetching = Status.FULFILLED;
  state.taskGroups = action.payload;
  if (action.payload.length > 0) {
    state.selectedTaskGroup = action.payload[0];
  }
  state.statuses.taskGroupFetching = Status.IDLE;
};

export const failedGetTaskGroups = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your task groups at this time.`);

  state.statuses.taskGroupFetching = Status.IDLE;
};


