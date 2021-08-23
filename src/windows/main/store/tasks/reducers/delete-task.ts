import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

type DeletedTask = {
  taskId: string;
};

const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ taskId }: DeletedTask): Promise<string> => {
    // Todo: Return taskId to be deleted
    return taskId;
  }
);

export const deleteTaskReducer = (state: Draft<TasksState>, action: PayloadAction<string>): Draft<TasksState> => {
  return {
    ...state,
    tasks: state.tasks.filter(task => task.ID !== action.payload),
  };
};

export default deleteTask;
