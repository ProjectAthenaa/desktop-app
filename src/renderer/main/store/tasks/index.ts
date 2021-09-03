import {createSlice} from '@reduxjs/toolkit';
import clearTaskReducer from './reducers/clear-task';
import {failedGetTaskGroups, fetchingTaskGroups, getTaskGroups, getTaskGroupsRequest} from './reducers/get-task-groups';
import {
  createTaskGroup,
  createTaskGroupRequest,
  createTempTaskGroup,
  undoTaskGroup
} from './reducers/create-task-group';
import {Task, TaskGroup} from '../../../../types/task';
import setSelectedTaskReducer from './reducers/set-selected-task';
import setSelectedTaskGroupReducer from './reducers/set-selected-task-group';
import setStatusReducer, {Status} from '../util/set-status';
import {deleteTaskGroup, deleteTaskGroupRequest, tempDeleteTaskGroup} from './reducers/delete-task-group';
import {
  tempUpdateTaskGroup,
  undoUpdateTaskGroup,
  updateTaskGroup,
  updateTaskGroupRequest
} from './reducers/update-task-group';
import {fetchingTask, getTask, getTaskRequest} from './reducers/get-task';
import {createTask, createTaskRequest, createTempTask} from './reducers/create-task';
import {deleteTask, deleteTaskRequest, restoreDeletedTask, tempDeleteTask} from './reducers/delete-task';
import {undoUpdateTask, updateTask, updateTaskRequest, updatingTask} from './reducers/update-task';
import {failedGetGroup, fetchingGroup, getGroup, getGroupRequest} from './reducers/get-group';

export enum TaskStatusType {
  taskCreation = 'taskCreation'
}

export interface TasksState {
  selectedTaskGroup: TaskGroup | null;
  selectedTask: Task | null;
  taskGroups: TaskGroup[];
  tasks: Task[];
  prevTaskGroup: TaskGroup | null;
  prevTask: Task | null;
  statuses: {
    taskGroupFetching: Status;
    taskGroupCreation: Status;
    taskGroupDeletion: Status;
    taskGroupUpdating: Status;
    taskFetching: Status;
    taskCreation: Status;
    taskDeletion: Status;
    taskUpdating: Status;
  };
}

const initialState: TasksState = {
  selectedTaskGroup: null,
  selectedTask: null,
  taskGroups: [],
  tasks: [],
  prevTaskGroup: null,
  prevTask: null,
  statuses: {
    taskGroupFetching: Status.IDLE,
    taskGroupCreation: Status.IDLE,
    taskGroupDeletion: Status.IDLE,
    taskGroupUpdating: Status.IDLE,
    taskFetching: Status.IDLE,
    taskCreation: Status.IDLE,
    taskDeletion: Status.IDLE,
    taskUpdating: Status.IDLE,
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
    // Task Groups Fetching
    [getTaskGroupsRequest.pending.type]: fetchingTaskGroups,
    [getTaskGroupsRequest.rejected.type]: failedGetTaskGroups,
    [getTaskGroupsRequest.fulfilled.type]: getTaskGroups,

    // Task Group Fetching
    [getGroupRequest.pending.type]: fetchingGroup,
    [getGroupRequest.rejected.type]: failedGetGroup,
    [getGroupRequest.fulfilled.type]: getGroup,

    // Task Group Creation
    [createTaskGroupRequest.pending.type]: createTempTaskGroup,
    [createTaskGroupRequest.rejected.type]: undoTaskGroup,
    [createTaskGroupRequest.fulfilled.type]: createTaskGroup,

    // Task Group Deletion
    [deleteTaskGroupRequest.pending.type]: tempDeleteTaskGroup,
    [deleteTaskGroupRequest.rejected.type]: undoTaskGroup,
    [deleteTaskGroupRequest.fulfilled.type]: deleteTaskGroup,

    // Task Group Modification
    [updateTaskGroupRequest.pending.type]: tempUpdateTaskGroup,
    [updateTaskGroupRequest.rejected.type]: undoUpdateTaskGroup,
    [updateTaskGroupRequest.fulfilled.type]: updateTaskGroup,

    // Task Fetching
    [getTaskRequest.pending.type]: fetchingTask,
    [getTaskRequest.rejected.type]: fetchingTask,
    [getTaskRequest.fulfilled.type]: getTask,

    // Task Creation
    [createTaskRequest.pending.type]: createTempTask,
    [createTaskRequest.rejected.type]: fetchingTask,
    [createTaskRequest.fulfilled.type]: createTask,

    // Task Deletion
    [deleteTaskRequest.pending.type]: tempDeleteTask,
    [deleteTaskRequest.rejected.type]: restoreDeletedTask,
    [deleteTaskRequest.fulfilled.type]: deleteTask,

    // Task Modification
    [updateTaskRequest.pending.type]: updatingTask,
    [updateTaskRequest.rejected.type]: undoUpdateTask,
    [updateTaskRequest.fulfilled.type]: updateTask,
  }
});

export const reducer = tasksSlice.reducer;
export const {
  setSelectedTask,
  setSelectedTaskGroup,
  clearTask,
  setStatus,
} = tasksSlice.actions;
