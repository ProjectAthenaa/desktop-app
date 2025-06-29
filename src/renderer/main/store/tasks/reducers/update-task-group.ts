import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedTaskGroup} from '../../../../../graphql/integration/handlers/tasks/get-group';

type UpdatedTaskGroup = {
  taskGroupId: string;
  Name: string;
};

export const updateTaskGroupRequest = createAsyncThunk(
  'tasks/updateTaskGroup',
  async ({ taskGroupId, ...updatedPayload }: UpdatedTaskGroup): Promise<FetchedTaskGroup> => {
    return await ipcRenderer.invoke('updateTaskGroup', taskGroupId, updatedPayload);
  }
);

export const tempUpdateTaskGroup = (state: Draft<TasksState>, action: PendingAction): void => {
  const pendingBody = action.meta.arg as UpdatedTaskGroup;

  state.statuses.taskGroupUpdating = Status.PENDING;

  state.prevTaskGroup = state.selectedTaskGroup;

  state.taskGroups = state.taskGroups.map(taskGroup =>
    taskGroup.ID === pendingBody.taskGroupId
      ? { ...taskGroup, Name: pendingBody.Name }
      : taskGroup
  );
};

export const updateTaskGroup = (state: Draft<TasksState>, action: PayloadAction<FetchedTaskGroup>): void => {
  state.statuses.taskGroupUpdating = Status.FULFILLED;

  state.taskGroups = state.taskGroups.map(taskGroup => {
    if (taskGroup.ID !== action.payload.ID) return taskGroup;
    return {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Tasks: action.payload.Tasks
    };
  });

  toast.error('Task group updated.');

  state.prevTaskGroup = null;
  state.statuses.taskGroupUpdating = Status.IDLE;
};

export const undoUpdateTaskGroup = (state: Draft<TasksState>): void => {
  state.statuses.taskGroupUpdating = Status.REJECTED;

  state.taskGroups = state.taskGroups.map(taskGroup =>
    taskGroup.ID === state.prevTaskGroup.ID
      ? state.prevTaskGroup
      : taskGroup
  );

  toast.error('Task group update failed.');

  state.statuses.taskGroupUpdating = Status.IDLE;
};
