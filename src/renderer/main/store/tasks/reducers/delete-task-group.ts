import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';

type DeletedTaskGroup = {
  taskGroupId: string;
};

export const deleteTaskGroupRequest = createAsyncThunk(
  'tasks/deleteTaskGroup',
  async ({ taskGroupId }: DeletedTaskGroup): Promise<string> => {
    await ipcRenderer.invoke('deleteTaskGroup', taskGroupId);
    return taskGroupId;
  }
);

export const tempDeleteTaskGroup = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskGroupDeletion = Status.PENDING;
};

export const restoreDeletedTaskGroup = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskGroupDeletion = Status.REJECTED;
  state.statuses.taskGroupDeletion = Status.IDLE;
};

export const deleteTaskGroup = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskGroupDeletion = Status.FULFILLED;
  state.taskGroups = state.taskGroups.filter(taskGroup => taskGroup.ID !== action.payload);
};

