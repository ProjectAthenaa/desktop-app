import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

type DeletedTaskGroup = {
  taskGroupId: string;
};

const deleteTaskGroup = createAsyncThunk(
  'tasks/deleteTaskGroup',
  async ({ taskGroupId }: DeletedTaskGroup): Promise<string> => {
    // Todo: Return taskId to be deleted
    return taskGroupId;
  }
);

export const deleteTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<string>): Draft<TasksState> => {
  return {
    ...state,
    taskGroups: state.taskGroups.filter(taskGroup => taskGroup.ID !== action.payload),
  };
};

export default deleteTaskGroup;
