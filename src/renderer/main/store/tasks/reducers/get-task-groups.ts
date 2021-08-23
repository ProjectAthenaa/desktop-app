import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

const getTaskGroups = createAsyncThunk(
  'tasks/getTaskGroups',
  async (): Promise<TaskGroup[]> => {
    return await ipcRenderer.invoke('getTaskGroups') as TaskGroup[];
  }
);

export const getTaskGroupsReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup[]>): Draft<TasksState> => {
  return {
    ...state,
    taskGroups: action.payload
  };
};

export default getTaskGroups;
