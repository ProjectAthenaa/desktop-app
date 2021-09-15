import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskCreation} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

export const createTaskRequest = createAsyncThunk(
  'tasks/createTask',
  async (task: TaskCreation): Promise<FetchedTask> => {
    return await ipcRenderer.invoke('createTask', task);
  }
);

export const createTempTask = (state: Draft<TasksState>, action: PayloadAction<FetchedTask>): void => {
  state.statuses.taskCreation = Status.PENDING;
  //
  // state.tasks.push({
  //   ...action.payload,
  //   ID: 'temp'
  // });
};

export const undoTaskCreation = (state: Draft<TasksState>): void => {
  state.statuses.taskGroupCreation = Status.REJECTED;

  toast.error('There was an issue creating the task at this time.');

  // state.tasks = state.tasks.filter(task => task.ID !== 'temp');

  state.statuses.taskGroupCreation = Status.IDLE;
};

export const createTask = (state: Draft<TasksState>, action: PayloadAction<FetchedTask>): void => {
  state.statuses.taskCreation = Status.FULFILLED;

  toast.success('Task created.');
  //
  // state.tasks = state.tasks.map(task =>
  //   task.ID === 'temp'
  //   ?  action.payload
  //   : task
  // );

  state.selectedTaskGroup.Tasks.push(action.payload);

  state.statuses.taskCreation = Status.IDLE;
};
