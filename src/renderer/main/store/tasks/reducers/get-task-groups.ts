import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';

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
