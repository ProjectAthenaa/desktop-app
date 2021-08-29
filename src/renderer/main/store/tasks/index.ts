import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import createTask, {createTaskReducer} from './reducers/create-task';
import updateTask, {updateTaskReducer} from './reducers/update-task';
import deleteTask, {deleteTaskReducer} from './reducers/delete-task';
import getGroup, {getGroupReducer} from './reducers/get-group';
import getTask, {getTaskReducer} from './reducers/get-task';
import clearTask from './reducers/clear-task';
import getTaskGroups, {getTaskGroupsReducer} from './reducers/get-task-groups';
import {
  createTaskGroup, createTaskGroupAction, createTaskGroupRequest,
  createTempTaskGroup,
  undoTaskGroup
} from './reducers/create-task-group';
import {Task, TaskGroup} from '../../../../types/task';
import setSelectedTask from './reducers/set-selected-task';
import setSelectedTaskGroup from './reducers/set-selected-task-group';
import {isFulfilledAction, isPendingAction, isRejectedAction} from '../util/async-action-types';

export interface TasksState {
  selectedTaskGroup: TaskGroup | null;
  selectedTask: Task | null;
  taskGroups: TaskGroup[];
  tasks: Task[];
}

const initialState: TasksState = {
  selectedTaskGroup: null,
  selectedTask: null,
  taskGroups: [],
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // createTempTaskGroup,
    // undoTaskGroup,
    // createTaskGroup,
    setSelectedTask,
    setSelectedTaskGroup,
    clearTask,
  },
  extraReducers: {
    // [getTaskGroups.pending.type]: getTaskGroups,
    // [getTaskGroups.rejected.type]: undoTaskGroup,
    [getTaskGroups.fulfilled.type]: getTaskGroupsReducer,

    // Task Group Creation
    [createTaskGroupRequest.pending.type]: createTempTaskGroup,
    [createTaskGroupRequest.rejected.type]: () => {
      console.log(createTaskGroupRequest.rejected.type, createTaskGroupRequest.rejected.name);
    },
    [createTaskGroupRequest.fulfilled.type]: () => {
      console.log(createTaskGroupRequest.fulfilled.type, createTaskGroupRequest.fulfilled.name);
    }
    // [createTaskGroupRequest.pending.type]: () => {
    //   console.log(createTaskGroupRequest.pending.type, createTaskGroupRequest.pending.name);
    // },
    // [createTaskGroupRequest.rejected.type]: () => {
    //   console.log(createTaskGroupRequest.rejected.type, createTaskGroupRequest.rejected.name);
    // },
    // [createTaskGroupRequest.fulfilled.type]: () => {
    //   console.log(createTaskGroupRequest.fulfilled.type, createTaskGroupRequest.fulfilled.name);
    // }
  }
  // extraReducers: builder => {
  //   // Add Task
  //   builder.addCase(createTask.fulfilled, createTaskReducer);
  //   // Update a Task
  //   builder.addCase(updateTask.fulfilled, updateTaskReducer);
  //   // Delete a Task
  //   builder.addCase(deleteTask.fulfilled, deleteTaskReducer);
  //   // Gets Group by GroupId
  //   builder.addCase(getGroup.fulfilled, getGroupReducer);
  //   // Gets Task by Id
  //   builder.addCase(getTask.fulfilled, getTaskReducer);
  //   // Gets Task Groups
  //   builder.addCase(getTaskGroups.fulfilled, getTaskGroupsReducer);
  //   // Creates a Task Group
  //   // builder.addCase(createTaskGroupAction, state => state)
  //   //   .addMatcher(isPendingAction, createTempTaskGroup)
  //   //   .addMatcher(isRejectedAction, undoTaskGroup)
  //   //   .addMatcher(isFulfilledAction, createTaskGroup);
  //   builder
  //     .addCase(createTaskGroupRequest.fulfilled, createTaskGroup)
  //     .addCase(createTaskGroupRequest.rejected, undoTaskGroup);
  // }
});

export const reducer = tasksSlice.reducer;
export const taskActions = {
  ...tasksSlice.actions,
  createTask,
  updateTask,
  deleteTask,
  getGroup,
  getTask,
  getTaskGroups,
  createTaskGroupRequest
}
