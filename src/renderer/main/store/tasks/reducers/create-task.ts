import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskCreation} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const createTaskRequest = createAsyncThunk(
  'tasks/createTask',
  async (task: TaskCreation): Promise<Task> => {
    return await ipcRenderer.invoke('createTask', task) as Task;
  }
);

export const createTempTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskCreation = Status.PENDING;

  state.tasks.push({
    ...action.payload,
    ID: 'temp'
  });
};

export const undoTaskCreation = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskGroupCreation = Status.REJECTED;

  toast.error('There was an issue creating the task at this time.');

  state.tasks = state.tasks.filter(task => task.ID !== 'temp');

  state.statuses.taskGroupCreation = Status.IDLE;
};

export const createTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.statuses.taskCreation = Status.FULFILLED;

  toast.success('Task created.');

  state.tasks = state.tasks.map(task =>
    task.ID === 'temp'
    ?  action.payload
    : task
  );

  state.statuses.taskCreation = Status.IDLE;
};
