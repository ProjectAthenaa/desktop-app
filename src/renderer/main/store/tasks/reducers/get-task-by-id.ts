import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';

const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (taskId: string): Promise<Task> => {
    // Todo: Return task from Id
    return {} as Task;
  }
);

export const getTaskByIdReducer = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  return {
    ...state,
    selectedTask: action.payload
  };
};

export default getTaskById;
