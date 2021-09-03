import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type DeletedTask = {
  taskId: string;
};

export const deleteTaskRequest = createAsyncThunk(
  'tasks/deleteTask',
  async ({ taskId }: DeletedTask): Promise<string> => {
    return await ipcRenderer.invoke('deleteTask', taskId) as string;
  }
);

export const tempDeleteTask = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskDeletion = Status.PENDING;
};

export const restoreDeletedTask = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskDeletion = Status.REJECTED;

  toast.error('There was an issue deleting the task at this time.');

  state.statuses.taskDeletion = Status.IDLE;

};

export const deleteTask = (state: Draft<TasksState>, action: PayloadAction<string>) => {
  state.statuses.taskDeletion = Status.FULFILLED;

  toast.success('Task deleted.');

  state.tasks = state.tasks.filter(task => task.ID !== action.payload);
};
