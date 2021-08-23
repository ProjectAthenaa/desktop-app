import {TasksState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';

type DeletedTaskGroup = {
  taskGroupId: string;
};

const deleteTaskGroup = createAsyncThunk(
  'tasks/deleteTaskGroup',
  async ({ taskGroupId }: DeletedTaskGroup): Promise<string> => {
    return await ipcRenderer.invoke('deleteTaskGroup', taskGroupId) as string;
  }
);

export const deleteTaskGroupReducer = (state: Draft<TasksState>, action: PayloadAction<string>): Draft<TasksState> => {
  return {
    ...state,
    taskGroups: state.taskGroups.filter(taskGroup => taskGroup.ID !== action.payload),
  };
};

export default deleteTaskGroup;
