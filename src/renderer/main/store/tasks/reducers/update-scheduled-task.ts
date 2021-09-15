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


  state.selectedTaskGroup.Tasks = state.selectedTaskGroup.Tasks.map(task => {
    if (task.ID === action.payload.TaskID) return {
      ...task,
      Status: action.payload.Status
    };
    else return task;
  });
};

export default updateScheduledTasks;
