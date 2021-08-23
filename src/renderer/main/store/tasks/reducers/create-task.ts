import { TasksState } from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskCreation} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

const createTask = createAsyncThunk(
  'tasks/createTask',
  async (task: TaskCreation): Promise<Task> => {
    return await ipcRenderer.invoke('createTask', task) as Task;
  }
);

export const createTaskReducer = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  state.tasks.push(action.payload);

  return state;
};

export default createTask;
