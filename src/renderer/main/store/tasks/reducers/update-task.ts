import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

type UpdatedTask = {
  taskId: string;
  StartTime?: string;
  ProductID: string;
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

const updateTask = createAsyncThunk(
  'tasks/updateProfile',
  async ({ taskId, ...updatedPayload }: UpdatedTask): Promise<Task> => {
    return await ipcRenderer.invoke('updateTask', taskId, updatedPayload) as Task;
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
