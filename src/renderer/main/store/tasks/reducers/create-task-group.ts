import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

type TaskGroupCreation = {
  Name?: string;
};

const createTaskGroup = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation): Promise<TaskGroup> => {
    return await ipcRenderer.invoke('createTaskGroup', taskGroup) as TaskGroup;
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
