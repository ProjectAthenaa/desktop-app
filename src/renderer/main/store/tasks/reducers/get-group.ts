import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {Status} from '../../util/set-status';

interface Group extends TaskGroup {
  Tasks: Task[];
}

export const getGroupRequest = createAsyncThunk(
  'tasks/getGroup',
  async (groupId: string): Promise<Group> => {
    return await ipcRenderer.invoke('getGroup', groupId) as Group;
  }
);

export const fetchingGroup = (state: Draft<TasksState>, action: PayloadAction<Group>) => {
  state.statuses.taskGroupFetching = Status.PENDING;
};

export const getGroup = (state: Draft<TasksState>, action: PayloadAction<Group>) => {
  state.tasks = action.payload.Tasks;
  state.statuses.taskGroupFetching = Status.FULFILLED;

  toast.success(`${action.payload.Name} loaded.`);

  state.selectedTaskGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name
  };

  state.statuses.taskGroupFetching = Status.IDLE;
};

export const failedGetGroup = (state: Draft<TasksState>, action: PayloadAction<Group>) => {
  state.statuses.taskGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your task group at this time.`);

  state.statuses.taskGroupFetching = Status.IDLE;
};
