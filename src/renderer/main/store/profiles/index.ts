import { createSlice } from '@reduxjs/toolkit';
import setStatus from '../util/set-status';
import {Profile, ProfileGroup} from '../../../../types/profile';

export interface TasksState {
  selectedTaskGroup: ProfileGroup | null;
  selectedProfile: Profile | null;
  taskGroups: ProfileGroup[];
  profiles: Profile[];
  status: 'idle' | 'pending';
}

const initialState: TasksState = {
  selectedTaskGroup: null,
  selectedProfile: null,
  taskGroups: [],
  profiles: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setStatus,
  },
  extraReducers: builder => {
    // Add Task
    // builder.addCase(createTask.fulfilled, createTaskReducer);
  }
});

export const reducer = tasksSlice.reducer;
export const taskActions = {
  ...tasksSlice.actions,
  // Whatever async reducers here as well
}
