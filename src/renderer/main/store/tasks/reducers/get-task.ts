import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

const getTask = createAsyncThunk(
  'tasks/getTask',
  async (taskId: string): Promise<Task> => {
    return await ipcRenderer.invoke('getTask', taskId) as Task;
  }
);

export const getTaskReducer = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  return {
    ...state,
    selectedTask: action.payload
  };
};

export default getTask;
