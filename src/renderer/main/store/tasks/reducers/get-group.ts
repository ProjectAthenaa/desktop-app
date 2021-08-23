import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

interface Group extends TaskGroup {
  Tasks: Task[];
}
const getGroup = createAsyncThunk(
  'tasks/getGroup',
  async (groupId: string): Promise<Group> => {
    return await ipcRenderer.invoke('getGroup', groupId) as Group;
  }
);

export const getGroupReducer = (state: Draft<TasksState>, action: PayloadAction<Group>): Draft<TasksState> => {
  return {
    ...state,
    tasks: action.payload.Tasks,
    selectedTaskGroup: {
      ID: action.payload.ID,
      Name: action.payload.Name
    }
  };
};

export default getGroup;
