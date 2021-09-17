import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {Status as TaskStatus} from '../../../../../types/task';
import {toast} from 'react-toastify';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

type UpdatedTask = {
  taskId: string;
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
};

export const startTasksRequest = createAsyncThunk(
  'tasks/startTasks',
  async (taskIds: string[]): Promise<void> => {
    await ipcRenderer.invoke('resync-tasks', taskIds);
    return await ipcRenderer.invoke('start-tasks', taskIds);
  }
);

export const startTasks = (state: Draft<TasksState>): void => {
  state.tasks = state.tasks.map(task => ({
    ...task,
    Status: TaskStatus.PROCESSING,
  }));
};

export const startingTasks = (state: Draft<TasksState>): void => {
  state.tasks = state.tasks.map(task => ({
    ...task,
    Status: TaskStatus.STARTING,
  }));
}

export const undoStartTasks = (state: Draft<TasksState>): void => {
  state.tasks = state.tasks.map(task => ({
    ...task,
    Status: undefined,
  }));
};
