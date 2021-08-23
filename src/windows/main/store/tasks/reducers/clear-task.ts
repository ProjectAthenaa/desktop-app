import {TasksState} from '../index';
import {Draft} from '@reduxjs/toolkit';

const clearTask = (state: Draft<TasksState>): Draft<TasksState> => {
  return {
    ...state,
    selectedTask: null
  };
};

export default clearTask;
