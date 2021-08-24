import { createSlice } from '@reduxjs/toolkit';
import createTask, {createTaskReducer} from './reducers/create-task';
import setStatus from '../util/set-status';
import updateTask, {updateTaskReducer} from './reducers/update-task';
import deleteTask, {deleteTaskReducer} from './reducers/delete-task';
import getGroup, {getGroupReducer} from './reducers/get-group';
import getTask, {getTaskReducer} from './reducers/get-task';
import clearTask from './reducers/clear-task';
import getTaskGroups, {getTaskGroupsReducer} from './reducers/get-task-groups';
import createTaskGroup, {createTaskGroupReducer} from './reducers/create-task-group';
import {Task, TaskGroup} from '../../../../types/task';

export interface TasksState {
  selectedTaskGroup: TaskGroup | null;
  selectedTask: Task | null;
  taskGroups: TaskGroup[];
  tasks: Task[];
  status: 'idle' | 'pending';
}

const initialState: TasksState = {
  selectedTaskGroup: null,
  selectedTask: null,
  taskGroups: [],
  tasks: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setStatus,
    clearTask
  },
  extraReducers: builder => {
    // Add Task
    builder.addCase(createTask.fulfilled, createTaskReducer);
    // Update a Task
    builder.addCase(updateTask.fulfilled, updateTaskReducer);
    // Delete a Task
    builder.addCase(deleteTask.fulfilled, deleteTaskReducer);
    // Gets Group by GroupId
    builder.addCase(getGroup.fulfilled, getGroupReducer);
    // Gets Task by Id
    builder.addCase(getTask.fulfilled, getTaskReducer);
    // Gets Task Groups
    builder.addCase(getTaskGroups.fulfilled, getTaskGroupsReducer);
    // Creates a Task Group
    builder.addCase(createTaskGroup.fulfilled, createTaskGroupReducer);
  }
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
}
