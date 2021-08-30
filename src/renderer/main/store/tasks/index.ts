import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import createTask, {createTaskReducer} from './reducers/create-task';
import updateTask, {updateTaskReducer} from './reducers/update-task';
import deleteTask, {deleteTaskReducer} from './reducers/delete-task';
import getGroup, {getGroupReducer} from './reducers/get-group';
import getTask, {getTaskReducer} from './reducers/get-task';
import clearTaskReducer from './reducers/clear-task';
import getTaskGroups, {getTaskGroupsReducer} from './reducers/get-task-groups';
import {
  createTaskGroup,
  createTaskGroupAction,
  createTaskGroupRequest,
  createTempTaskGroup,
  undoTaskGroup
} from './reducers/create-task-group';
import {Task, TaskGroup} from '../../../../types/task';
import setSelectedTaskReducer from './reducers/set-selected-task';
import setSelectedTaskGroupReducer from './reducers/set-selected-task-group';
import setStatusReducer, {Status} from '../util/set-status';
import {isFulfilledAction, isPendingAction, isRejectedAction} from '../util/async-action-types';

export enum TaskStatusType {
  taskCreation = 'taskCreation'
}

export interface TasksState {
  selectedTaskGroup: TaskGroup | null;
  selectedTask: Task | null;
  taskGroups: TaskGroup[];
  tasks: Task[];
  statuses: {
    taskCreation: Status;
  };
}

const initialState: TasksState = {
  selectedTaskGroup: null,
  selectedTask: null,
  taskGroups: [],
  tasks: [],
  statuses: {
    taskCreation: Status.IDLE
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setSelectedTask: setSelectedTaskReducer,
    setSelectedTaskGroup: setSelectedTaskGroupReducer,
    clearTask: clearTaskReducer,
    setStatus: setStatusReducer,
  },
  extraReducers: {
    // [getTaskGroups.pending.type]: getTaskGroups,
    // [getTaskGroups.rejected.type]: undoTaskGroup,
    [getTaskGroups.fulfilled.type]: getTaskGroupsReducer,

    // Task Group Creation
    [createTaskGroupRequest.pending.type]: createTempTaskGroup,
    [createTaskGroupRequest.rejected.type]: undoTaskGroup,
    [createTaskGroupRequest.fulfilled.type]: createTaskGroup,
  }
});

export const reducer = tasksSlice.reducer;
export const {
  setSelectedTask,
  setSelectedTaskGroup,
  clearTask,
  setStatus,
  // createTask,
  // updateTask,
  // deleteTask,
  // getGroup,
  // getTask,
  // getTaskGroups,
  // createTaskGroupRequest
} = tasksSlice.actions;
