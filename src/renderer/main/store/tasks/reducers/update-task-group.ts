import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';

type UpdatedTaskGroup = {
  taskGroupId: string;
  Name: string;
};

export const updateTaskGroupRequest = createAsyncThunk(
  'tasks/updateProfileGroup',
  async ({ taskGroupId, ...updatedPayload }: UpdatedTaskGroup): Promise<TaskGroup> => {
    return await ipcRenderer.invoke('updateTaskGroup', taskGroupId, updatedPayload) as TaskGroup;
  }
);

export const tempUpdateTaskGroup = (state: Draft<TasksState>, action: PendingAction) => {
  const pendingBody = action.meta.arg as UpdatedTaskGroup;

  state.statuses.taskGroupUpdating = Status.PENDING;

  state.prevTaskGroup = state.taskGroups.find(taskGroup => taskGroup.ID === pendingBody.taskGroupId);

  state.taskGroups = state.taskGroups.map(taskGroup =>
    taskGroup.ID === pendingBody.taskGroupId
      ? { ...taskGroup, Name: pendingBody.Name }
      : taskGroup
  );
};

export const updateTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>) => {
  state.statuses.taskGroupUpdating = Status.FULFILLED;

  state.taskGroups = state.taskGroups.map(taskGroup => {
    if (taskGroup.ID !== action.payload.ID) return taskGroup;
    return {
      ID: action.payload.ID,
      Name: action.payload.Name,
    };
  });

  state.prevTask = null;
  state.statuses.taskGroupUpdating = Status.IDLE;
};

export const undoUpdateTaskGroup = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>) => {
  state.statuses.taskGroupUpdating = Status.REJECTED;

  state.taskGroups = state.taskGroups.map(taskGroup =>
    taskGroup.ID === state.prevTaskGroup.ID
      ? state.prevTaskGroup
      : taskGroup
  );

  state.statuses.taskGroupUpdating = Status.IDLE;
};
