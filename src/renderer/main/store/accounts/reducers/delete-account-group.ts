import {AccountsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type DeletedTaskGroup = {
  taskGroupId: string;
};

export const deleteAccountGroupRequest = createAsyncThunk(
  'accounts/deleteAccountGroup',
  async ({ taskGroupId }: DeletedTaskGroup): Promise<string> => {
    await ipcRenderer.invoke('deleteAccountGroup', taskGroupId);
    return taskGroupId;
  }
);

export const tempDeleteAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<string>) => {
  state.statuses.accountGroupDeletion = Status.PENDING;
};

export const restoreDeletedAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<string>) => {
  state.statuses.accountGroupDeletion = Status.REJECTED;

  toast.error('There was an issue deleting the account group at this time.');

  state.statuses.accountGroupDeletion = Status.IDLE;
};

export const deleteAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<string>) => {
  state.statuses.accountGroupDeletion = Status.FULFILLED;

  toast.success('Task group deleted.');

  state.accountGroups = state.accountGroups.filter(accountGroup => accountGroup.ID !== action.payload);
};

