import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskStatus} from '../../../../../graphql/tasks/handlers/task-updates';

const updateScheduledTasks = (state: Draft<TasksState>, action: PayloadAction<TaskStatus>) => {
  state.scheduledTasks = state.scheduledTasks.map(scheduledTask =>
    scheduledTask.ID === action.payload.TaskID
      ? {
        ...scheduledTask,
        Status: action.payload.Status,
      }
      : scheduledTask
  );
};

export default updateScheduledTasks;
