import {LookupType, Site, TasksState, Task} from './index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';

type TaskCreation = {
  StartTime?: string;
  Product: {
    Name: string;
    Image?: string;
    LookupType: LookupType;
    PositiveKeywords: string[];
    NegativeKeywords: string[];
    Link?: string;
    Quantity?: number;
    Sizes: string[];
    Colors: string[];
    Site: Site;
    Metadata: { [key: string]: never; }
  };
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

const createTask = createAsyncThunk(
  'tasks/createTask',
  async (task: TaskCreation, thunkAPI) => {

  }
)

export const addTask = (state: Draft<TasksState>, action: PayloadAction<Task>) => {
  state.tasks.push(action.payload);
};

export default createTask;
