import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task} from '../../../../../types/task';

export const setSelectedTask = (state: Draft<TasksState>, action: PayloadAction<Task>): Draft<TasksState> => {
  return {
    ...state,
    selectedTask: action.payload
  };
};

export default setSelectedTask;
