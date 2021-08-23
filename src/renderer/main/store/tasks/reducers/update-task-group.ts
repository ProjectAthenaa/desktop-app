import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';

type UpdatedTaskGroup = {
  taskGroupId: string;
  Name: string;
};

const updateTaskGroup = createAsyncThunk(
  'tasks/updateTaskGroup',
  async ({ taskGroupId, ...updatedPayload }: UpdatedTaskGroup): Promise<TaskGroup> => {
    return await ipcRenderer.invoke('updateTaskGroup', taskGroupId, updatedPayload) as TaskGroup;
  }
);

export const updateTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<TaskGroup>): Draft<TasksState> => {
  return {
    ...state,
    selectedTaskGroup: {
      ID: action.payload.ID,
      Name: action.payload.Name,
    },
    taskGroups: state.taskGroups.map(taskGroup => {
      if (taskGroup.ID !== action.payload.ID) return taskGroup;
      return {
        ID: action.payload.ID,
        Name: action.payload.Name,
      };
    }),
  };
};

export default updateTaskGroup;
