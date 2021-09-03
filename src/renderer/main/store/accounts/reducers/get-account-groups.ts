import {AccountsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {AccountGroup} from '../../../../../types/account';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getAccountGroupsRequest = createAsyncThunk(
  'accounts/getAccountGroups',
  async (): Promise<AccountGroup[]> => {
    return await ipcRenderer.invoke('getAccountGroups');
  }
);

export const fetchingAccountGroups = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupsFetching = Status.PENDING;
};

export const getAccountGroups = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup[]>) => {
  state.statuses.accountGroupsFetching = Status.FULFILLED;
  state.accountGroups = action.payload;
  state.statuses.accountGroupsFetching = Status.IDLE;
};

export const failedGetAccountGroups = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupsFetching = Status.REJECTED;

  toast.error(`Failed to load your account groups at this time.`);

  state.statuses.accountGroupsFetching = Status.IDLE;
};


