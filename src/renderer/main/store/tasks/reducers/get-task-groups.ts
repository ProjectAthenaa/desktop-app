import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedTaskGroups} from '../../../../../graphql/integration/handlers/tasks/get-task-groups';
import {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

export const getTaskGroupsRequest = createAsyncThunk(
  'tasks/getTaskGroups',
  async (): Promise<FetchedTaskGroups> => {
    return await ipcRenderer.invoke('getTaskGroups');
  }
);

export const fetchingTaskGroups = (state: Draft<TasksState>): void => {
  state.statuses.taskGroupFetching = Status.PENDING;
};

export const getTaskGroups = (state: Draft<TasksState>, action: PayloadAction<{ groups: FetchedTaskGroups, selectedTaskGroup: FetchedTaskGroup | null }>): void => {
  state.statuses.taskGroupFetching = Status.FULFILLED;
  state.taskGroups = action.payload.groups;

  if (action.payload.groups.length > 0 && action.payload.selectedTaskGroup) {
    state.selectedTaskGroup = action.payload.selectedTaskGroup;
  }

  state.statuses.taskGroupFetching = Status.IDLE;
};

export const failedGetTaskGroups = (state: Draft<TasksState>): void => {
  state.statuses.taskGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your task groups at this time.`);

  state.statuses.taskGroupFetching = Status.IDLE;
};


