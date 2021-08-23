import {Task, TaskGroup, TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

interface Group extends TaskGroup {
  Tasks: Task[];
}
const getGroupById = createAsyncThunk(
  'tasks/getTasksByGroupId',
  async (groupId: string): Promise<Group> => {
    // Todo: Return tasks from groupId
    return {} as Group;
  }
);

export const getGroupByIdReducer = (state: Draft<TasksState>, action: PayloadAction<Group>): Draft<TasksState> => {
  return {
    ...state,
    tasks: action.payload.Tasks,
    selectedTaskGroup: {
      ID: action.payload.ID,
      Name: action.payload.Name
    }
  };
};

export default getGroupById;
