import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';

export const setSelectedTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  return {
    ...state,
    selectedTaskGroup: action.payload
  };
};

export default setSelectedTaskGroup;
