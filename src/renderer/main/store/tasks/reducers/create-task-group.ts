import {TasksState} from '../index';
import {createAction, createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import { toast } from 'react-toastify';

type TaskGroupCreation = {
  Name?: string;
};

export const createTempTaskGroup = (state: Draft<TasksState>, action: PendingAction): Draft<TasksState> => {
  const pendingBody: TaskGroupCreation = action.meta.arg;

  state.statuses.taskGroupCreation = Status.PENDING;

  state.taskGroups.push({
    ID: 'temp',
    Name: pendingBody.Name
  });

  return state;
};

export const undoTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.filter(taskGroup => taskGroup.ID !== "temp");

  state.statuses.taskGroupCreation = Status.REJECTED;
  toast.error('There was an issue creating the task group at this time.');

  return state;
};

export const createTaskGroupRequest = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation) => {
    return await ipcRenderer.invoke('createTaskGroup', taskGroup);
  }
);


export const createTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.map(taskGroup => {
    if (taskGroup.ID === 'temp') {
      return action.payload;
    }

    return taskGroup;
  });

  state.statuses.taskGroupCreation = Status.FULFILLED;
  toast.success('Task group created.');
  
  state.selectedTaskGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
  };
  return state;
};

// export default createTaskGroup;
