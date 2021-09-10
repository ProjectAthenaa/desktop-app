import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

export const setSelectedTaskGroup = (state: Draft<TasksState>, action: PayloadAction<FetchedTaskGroup>): Draft<TasksState> => {
  return {
    ...state,
    selectedTaskGroup: action.payload
  };
};

export default setSelectedTaskGroup;
