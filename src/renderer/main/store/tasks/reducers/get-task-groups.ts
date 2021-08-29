import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

const getTaskGroups = createAsyncThunk(
  'tasks/getTaskGroups',
  async (): Promise<TaskGroup[]> => {
    const response = await ipcRenderer.invoke('getTaskGroups') as TaskGroup[];
    console.log(response);
    return response;
  }
);

export const getTaskGroupsReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup[]>): Draft<TasksState> => {
  console.log(action);
  return {
    ...state,
    taskGroups: action.payload
  };
};

export default getTaskGroups;
