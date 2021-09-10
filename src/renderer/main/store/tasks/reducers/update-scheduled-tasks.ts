import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {ScheduledTask} from '../../../../../graphql/tasks/handlers/get-scheduled-tasks';

const updateScheduledTasks = (state: Draft<TasksState>, action: PayloadAction<ScheduledTask[]>) => {
  state.scheduledTasks = action.payload;
};

export default updateScheduledTasks;
