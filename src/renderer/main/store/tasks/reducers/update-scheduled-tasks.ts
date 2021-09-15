import {TasksState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {ScheduledTask} from '../../../../../graphql/tasks/handlers/get-scheduled-tasks';

const updateScheduledTasks = (state: Draft<TasksState>, action: PayloadAction<ScheduledTask[]>) => {
  state.scheduledTasks = action.payload;

  action.payload.forEach(scheduledTask => {
    state.selectedTaskGroup.Tasks = state.selectedTaskGroup.Tasks.map(task => {
      if (task.ID === scheduledTask.ID) return {
        ...task,
        Status: scheduledTask.Status
      }
      else return task;
    })
  });
};

export default updateScheduledTasks;
