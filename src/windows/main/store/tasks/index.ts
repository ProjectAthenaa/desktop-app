import { createSlice } from '@reduxjs/toolkit';
import {ProxyList} from '../proxies';
import {ProfileGroup} from '../profiles';
import createTask, {createTaskReducer} from './reducers/create-task';
import setStatus from '../util/set-status';
import updateTask, {updateTaskReducer} from './reducers/update-task';
import deleteTask, {deleteTaskReducer} from './reducers/delete-task';
import getGroupById, {getGroupByIdReducer} from './reducers/get-group-by-id';
import getTaskById, {getTaskByIdReducer} from './reducers/get-task-by-id';
import clearTask from './reducers/clear-task';
import getTaskGroups, {getTaskGroupsReducer} from './reducers/get-task-groups';
import createTaskGroup, {createTaskGroupReducer} from './reducers/create-task-group';

export enum LookupType {
  Link = 'Link',
  Keywords = 'Keywords',
  Other = 'Other'
}

export enum Site {
  FinishLine     = "FinishLine",
  JD_Sports      = "JD_Sports",
  YeezySupply    = "YeezySupply",
  Supreme        = "Supreme",
  Eastbay_US     = "Eastbay_US",
  Champs_US      = "Champs_US",
  Footaction_US  = "Footaction_US",
  Footlocker_US  = "Footlocker_US",
  Bestbuy        = "Bestbuy",
  Pokemon_Center = "Pokemon_Center",
  Panini_US      = "Panini_US",
  Topss          = "Topss",
  Nordstorm      = "Nordstorm",
  End            = "End",
  Target         = "Target",
  Amazon         = "Amazon",
  Solebox        = "Solebox",
  Onygo          = "Onygo",
  Snipes         = "Snipes",
  Ssense         = "Ssense",
  Walmart        = "Walmart",
  Hibbet         = "Hibbet",
}

export enum TaskStatus {
  Padding = "PADDING",
  Starting = "STARTING",
  Monitoring = "MONITORING",
  Product_Found = "PRODUCT_FOUND",
  Adding_To_Cart = "ADDING_TO_CART",
  Solving_Captcha = "SOLVING_CAPTCHA",
  Checking_Out = "CHECKING_OUT",
  Checked_Out = "CHECKED_OUT",
  Error = "ERROR",
  Action_Needed = "ACTION_NEEDED",
  Generating_Cookies = "GENERATING_COOKIES",
  Task_Not_Found = "TASK_NOT_FOUND",
  Waiting_For_Checkout = "WAITING_FOR_CHECKOUT",
  Checkout_Error = "CHECKOUT_ERROR",
  Checkout_Failed = "CHECKOUT_FAILED",
  Checkout_Duplicate = "CHECKOUT_DUPLICATE",
  Checkout_OOS = "CHECKOUT_OOS",
  Checkout_Decline = "CHECKOUT_DECLINE",
  Checkout_Waiting_For_3DS = "CHECKOUT_WAITING_FOR_3DS",
  Checkout_3DS_ERROR = "CHECKOUT_3DS_ERROR",
  Stopped = "STOPPED",
  Pausing = "PAUSING",
  Paused = "PAUSED",
  Continuing = "CONTINUING",
  Continued = "CONTINUED",
  Restarting = "RESTARTING",
}

export interface Product {
  ID: string;
  Name: string;
  Image: string;
  LookupType: LookupType;
  PositiveKeywords: string[];
  NegativeKeywords: string[];
  Link: string;
  Quantity: number;
  Sizes: string[];
  Colors: string[];
  Site: Site
  Metadata: { [key: string]: never; };
}

export interface Task {
  ID: string;
  StartTime: string;
  Product: Product;
  ProxyList: ProxyList;
  ProfileGroup: ProfileGroup;
  Status: TaskStatus;
}

export interface TaskGroup {
  ID: string;
  Name: string;
}

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
    builder.addCase(getGroupById.fulfilled, getGroupByIdReducer);
    // Gets Task by Id
    builder.addCase(getTaskById.fulfilled, getTaskByIdReducer);
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
  getTasksByGroupId: getGroupById,
  getTaskById,
  getTaskGroups,
}
