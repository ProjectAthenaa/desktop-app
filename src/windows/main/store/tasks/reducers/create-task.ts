import {LookupType, Site, TasksState, Task} from '../index';
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
  async (task: TaskCreation): Promise<Task> => {
    // Todo: Return newly created task from API
    return task as unknown as Task;
  }
);

export const createTaskReducer = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  state.tasks.push(action.payload);

  return state;
};

export default createTask;
