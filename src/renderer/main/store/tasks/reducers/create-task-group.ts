import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import { toast } from 'react-toastify';
import {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

type TaskGroupCreation = {
  Name?: string;
};

export const createTaskGroupRequest = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation) => {
    return await ipcRenderer.invoke('createTaskGroup', taskGroup);
  }
);

export const createTempTaskGroup = (state: Draft<TasksState>, action: PendingAction): void => {
  const pendingBody: TaskGroupCreation = action.meta.arg;

  state.statuses.taskGroupCreation = Status.PENDING;

  state.taskGroups.push({
    ID: 'temp',
    Name: pendingBody.Name,
    Tasks: [],
  });
};

export const undoTaskGroup = (state: Draft<TasksState>): void => {
  state.taskGroups = state.taskGroups.filter(taskGroup => taskGroup.ID !== "temp");

  state.statuses.taskGroupCreation = Status.REJECTED;
  toast.error('There was an issue creating the task group at this time.');

  state.statuses.taskGroupCreation = Status.IDLE;
};

export const createTaskGroup = (state: Draft<TasksState>, action: PayloadAction<FetchedTaskGroup>): void => {
  state.taskGroups = state.taskGroups.map(taskGroup =>
    taskGroup.ID === 'temp'
      ? action.payload
      : taskGroup
  );

  state.statuses.taskGroupCreation = Status.FULFILLED;
  toast.success('Task group created.');

  state.selectedTaskGroup = action.payload;

  state.statuses.taskGroupCreation = Status.IDLE;
};

// export default createTaskGroup;
