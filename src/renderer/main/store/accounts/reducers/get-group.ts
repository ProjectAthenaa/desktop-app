import {AccountsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskGroup} from '../../../../../types/task';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {Status} from '../../util/set-status';
import {AccountGroup} from '../../../../../types/account';

interface Group extends TaskGroup {
  Tasks: Task[];
}

export const getGroupRequest = createAsyncThunk(
  'accounts/getGroup',
  async (groupId: string): Promise<Group> => {
    return await ipcRenderer.invoke('getAccountGroup', groupId) as Group;
  }
);

export const fetchingGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>): void => {
  state.statuses.accountGroupFetching = Status.PENDING;
};

export const getGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>): void => {
  state.statuses.accountGroupFetching = Status.FULFILLED;

  toast.success(`${action.payload.Name} loaded.`);

  state.selectedAccountGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
    Accounts: action.payload.Accounts,
    Site: action.payload.Site
  };

  state.statuses.accountGroupFetching = Status.IDLE;
};

export const failedGetGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>) => {
  state.statuses.accountGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your account group at this time.`);

  state.statuses.accountGroupFetching = Status.IDLE;
};
