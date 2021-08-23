import {TasksState, Task} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

type UpdatedTask = {
  taskId: string;
  StartTime?: string;
  ProductID: string;
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, ...updatedPayload }: UpdatedTask): Promise<Task> => {
    // Todo: Return newly updated task from API
    return {} as unknown as Task;
  }
);

export const updateTaskReducer = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  return {
    ...state,
    tasks: state.tasks.map(task => {
      if (task.ID !== action.payload.ID) return task;
      return action.payload;
    }),
  };
};

export default updateTask;
