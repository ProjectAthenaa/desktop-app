import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {FetchedTask} from '../../../../../graphql/integration/handlers/tasks/get-task';

const setSelectedTask = (state: Draft<TasksState>, action: PayloadAction<FetchedTask>): Draft<TasksState> => {
  return {
    ...state,
    selectedTask: action.payload
  };
};

export default setSelectedTask;
