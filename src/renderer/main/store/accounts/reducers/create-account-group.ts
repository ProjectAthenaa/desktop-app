import {AccountsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {AccountGroup, AccountGroupInput} from '../../../../../types/account';

export const createAccountGroupRequest = createAsyncThunk(
  'accounts/createAccountGroup',
  async (accountGroup: AccountGroupInput): Promise<AccountGroup> => {
    return await ipcRenderer.invoke('createAccountGroup', accountGroup);
  }
);

export const createTempAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroupInput>) => {
  state.statuses.accountGroupCreation = Status.PENDING;

  state.accountGroups.push({
    ...action.payload,
    ID: 'temp'
  });
};

export const undoAccountGroupCreation = (state: Draft<AccountsState>, action: PayloadAction<AccountGroupInput>) => {
  state.statuses.accountGroupCreation = Status.REJECTED;

  toast.error('There was an issue creating the account group at this time.');

  state.accountGroups = state.accountGroups.filter(accountGroup => accountGroup.ID !== 'temp');

  state.statuses.accountGroupCreation = Status.IDLE;
};

export const createAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupCreation = Status.FULFILLED;

  toast.success('Account group created.');

  state.accountGroups = state.accountGroups.map(accountGroup =>
    accountGroup.ID === 'temp'
      ?  action.payload
      : accountGroup
  );

  state.statuses.accountGroupCreation = Status.IDLE;
};
