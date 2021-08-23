import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';

type TaskGroupCreation = {
  Name?: string;
};

const createTaskGroup = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation): Promise<TaskGroup> => {
    // Todo: Return newly created task group from API
    return {} as TaskGroup;
  }
);

export const createTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups.push(action.payload);
  state.selectedTaskGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
  };
  return state;
};

export default createTaskGroup;
