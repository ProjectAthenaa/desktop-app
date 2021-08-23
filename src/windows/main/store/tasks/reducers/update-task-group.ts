import {TasksState, Task, TaskGroup} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

type UpdatedTaskGroup = {
  taskGroupId: string;
  Name: string;
};

const updateTaskGroup = createAsyncThunk(
  'tasks/updateTaskGroup',
  async ({ taskGroupId, Name }: UpdatedTaskGroup): Promise<TaskGroup> => {
    // Todo: Return newly updated task from API
    return {} as TaskGroup;
  }
);

export const updateTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  return {
    ...state,
    selectedTaskGroup: {
      ID: action.payload.ID,
      Name: action.payload.Name,
    },
    taskGroups: state.taskGroups.map(taskGroup => {
      if (taskGroup.ID !== action.payload.ID) return taskGroup;
      return {
        ID: action.payload.ID,
        Name: action.payload.Name,
      };
    }),
  };
};

export default updateTaskGroup;
