import {TasksState} from '../index';
import {createAction, createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';

type TaskGroupCreation = {
  Name?: string;
};

export const createTaskGroupAction = createAction('tasks/createTaskGroup');

export const createTempTaskGroup = (state: Draft<TasksState>, action: PendingAction): Draft<TasksState> => {
  const pendingBody: TaskGroupCreation = action.meta.arg;

  state.statuses.taskCreation = Status.PENDING;

  state.taskGroups.push({
    ID: 'temp',
    Name: pendingBody.Name
  });

  return state;
};

export const undoTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.filter(taskGroup => taskGroup.ID !== "temp");

  // TODO: Fire method to show error toast
  state.statuses.taskCreation = Status.REJECTED;

  return state;
};

export const createTaskGroupRequest = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation ) => {
    return await ipcRenderer.invoke('createTaskGroup', taskGroup);;
  }
);

// const getTask = createAsyncThunk(
//   'tasks/getTask',
//   async (taskId: string): Promise<Task> => {
//     return await ipcRenderer.invoke('getTask', taskId) as Task;
//   }
// );


export const createTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.map(taskGroup => {
    if (taskGroup.ID === 'temp') {
      return action.payload;
    }

    return taskGroup;
  });

  state.statuses.taskCreation = Status.FULFILLED;

  state.selectedTaskGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
  };
  return state;
};

// export default createTaskGroup;
