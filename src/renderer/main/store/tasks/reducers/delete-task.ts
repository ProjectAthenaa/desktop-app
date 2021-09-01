import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {TaskGroup} from '../../../../../types/task';

type DeletedTask = {
  taskId: string;
};

const deleteTask = createAsyncThunk(
  'tasks/deleteProfile',
  async ({ taskId }: DeletedTask): Promise<string> => {
    return await ipcRenderer.invoke('deleteTask', taskId) as string;
  }
);

export const deleteTaskReducer = (state: Draft<TasksState>, action: PayloadAction<string>): Draft<TasksState> => {
  return {
    ...state,
    tasks: state.tasks.filter(task => task.ID !== action.payload),
  };
};

export default deleteTask;
