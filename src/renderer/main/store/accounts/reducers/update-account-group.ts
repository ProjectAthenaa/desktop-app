import {AccountsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {AccountGroup} from '../../../../../types/account';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const updateAccountGroupRequest = createAsyncThunk(
  'accounts/updateAccountGroup',
  async ({ ID, ...updatedPayload }: AccountGroup): Promise<AccountGroup> => {
    return await ipcRenderer.invoke('updateAccountGroup', ID, updatedPayload) as AccountGroup;
  }
);

export const tempUpdateAccountGroup = (state: Draft<AccountsState>, action: PendingAction) => {
  const pendingBody = action.meta.arg as AccountGroup;

  state.statuses.accountGroupUpdating = Status.PENDING;

  state.prevAccountGroup = state.accountGroups.find(accountGroup => accountGroup.ID === pendingBody.ID);

  state.accountGroups = state.accountGroups.map(accountGroup =>
    accountGroup.ID === pendingBody.ID
      ? { ...accountGroup, ...pendingBody }
      : accountGroup
  );
};

export const updateAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupUpdating = Status.FULFILLED;

  state.accountGroups = state.accountGroups.map(accountGroup => {
    if (accountGroup.ID !== action.payload.ID) return accountGroup;
    return {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Accounts: action.payload.Accounts,
    };
  });

  toast.error('Account group updated.');

  state.statuses.accountGroupUpdating = Status.IDLE;
};

export const undoUpdateAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupUpdating = Status.REJECTED;

  state.accountGroups = state.accountGroups.map(accountGroup =>
    accountGroup.ID === state.prevAccountGroup.ID
      ? state.prevAccountGroup
      : accountGroup
  );

  toast.error('Account group update failed.');

  state.statuses.accountGroupUpdating = Status.IDLE;
};
