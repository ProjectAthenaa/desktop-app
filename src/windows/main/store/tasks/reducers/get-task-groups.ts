import {TaskGroup, TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

const getTaskGroups = createAsyncThunk(
  'tasks/getTaskGroups',
  async (): Promise<TaskGroup[]> => {
    // Todo: Return task groups
    return [];
  }
);

export const getTaskGroupsReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup[]>): Draft<TasksState> => {
  return {
    ...state,
    taskGroups: action.payload
  };
};

export default getTaskGroups;
