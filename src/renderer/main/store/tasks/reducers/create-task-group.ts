import {taskActions, TasksState} from '../index';
import {createAction, createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {store} from '../../index';
import {PendingAction} from '../../util/async-action-types';

type TaskGroupCreation = {
  Name?: string;
};

export const createTaskGroupAction = createAction('tasks/createTaskGroup');

export const createTempTaskGroup = (state: Draft<TasksState>, action: PendingAction): Draft<TasksState> => {
  const pendingBody: TaskGroupCreation = action.meta.arg;

  state.taskGroups.push({
    ID: 'temp',
    Name: pendingBody.Name
  });

  return state;
};

export const undoTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.filter(taskGroup => taskGroup.ID !== "temp");

  // TODO: Fire method to show error toast

  return state;
};

export const createTaskGroupRequest = createAsyncThunk(
  'tasks/createTaskGroup',
  async (taskGroup: TaskGroupCreation, { dispatch }): Promise<TaskGroup> => {
    return await ipcRenderer.invoke('createTaskGroup', taskGroup) as TaskGroup;
  }
);

// export const createTaskGroupRequest = async (taskGroup: TaskGroupCreation) => {
//   store.dispatch({
//     type: 'tasks/createTempTaskGroup',
//     payload: taskGroup
//   });
//
//   try {
//     const response = await ipcRenderer.invoke('createTaskGroup', taskGroup) as TaskGroup;
//
//     store.dispatch({
//       type: 'tasks/createTaskGroup',
//       payload: response
//     });
//   } catch (error) {
//     store.dispatch({
//       type: 'tasks/undoTaskGroup'
//     });
//   }
// };


export const createTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  state.taskGroups = state.taskGroups.map(taskGroup => {
    if (taskGroup.ID === 'temp') {
      return action.payload;
    }

    return taskGroup;
  });

  state.selectedTaskGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
  };
  return state;
};

// export default createTaskGroup;
