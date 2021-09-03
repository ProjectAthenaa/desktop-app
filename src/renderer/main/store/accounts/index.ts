import {createSlice} from '@reduxjs/toolkit';
import setStatusReducer, {Status} from '../util/set-status';
import {AccountGroup} from '../../../../types/account';
import setSelectedAccountGroupReducer from './reducers/set-selected-account-group';
import {
  createAccountGroup,
  createAccountGroupRequest,
  createTempAccountGroup,
  undoAccountGroupCreation
} from './reducers/create-account-group';
import {
  failedGetAccountGroups,
  fetchingAccountGroups,
  getAccountGroups,
  getAccountGroupsRequest
} from './reducers/get-account-groups';
import {deleteAccountGroup, deleteAccountGroupRequest, tempDeleteAccountGroup} from './reducers/delete-account-group';
import {failedGetGroup, fetchingGroup, getGroup, getGroupRequest} from './reducers/get-group';
import {
  tempUpdateAccountGroup,
  undoUpdateAccountGroup, updateAccountGroup,
  updateAccountGroupRequest
} from './reducers/update-account-group';

export interface AccountsState {
  selectedAccountGroup: AccountGroup | null;
  accountGroups: AccountGroup[];
  prevAccountGroup: AccountGroup | null;
  statuses: {
    accountGroupsFetching: Status;
    accountGroupFetching: Status;
    accountGroupDeletion: Status;
    accountGroupUpdating: Status;
    accountGroupCreation: Status;
  };
}

const initialState: AccountsState = {
  selectedAccountGroup: null,
  accountGroups: [],
  prevAccountGroup: null,
  statuses: {
    accountGroupsFetching: Status.IDLE,
    accountGroupFetching: Status.IDLE,
    accountGroupDeletion: Status.IDLE,
    accountGroupUpdating: Status.IDLE,
    accountGroupCreation: Status.IDLE,
  },
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setSelectedAccountGroup: setSelectedAccountGroupReducer,
    setStatus: setStatusReducer,
  },
  extraReducers: {
    // Account Groups Creation
    [createAccountGroupRequest.pending.type]: createTempAccountGroup,
    [createAccountGroupRequest.rejected.type]: undoAccountGroupCreation,
    [createAccountGroupRequest.fulfilled.type]: createAccountGroup,

    // Account Groups Fetching
    [getAccountGroupsRequest.pending.type]: fetchingAccountGroups,
    [getAccountGroupsRequest.rejected.type]: failedGetAccountGroups,
    [getAccountGroupsRequest.fulfilled.type]: getAccountGroups,

    // Account Groups Deletion
    [deleteAccountGroupRequest.pending.type]: tempDeleteAccountGroup,
    [deleteAccountGroupRequest.rejected.type]: undoAccountGroupCreation,
    [deleteAccountGroupRequest.fulfilled.type]: deleteAccountGroup,

    // Account Group Fetching
    [getGroupRequest.pending.type]: fetchingGroup,
    [getGroupRequest.rejected.type]: failedGetGroup,
    [getGroupRequest.fulfilled.type]: getGroup,

    // Account Group Updating
    [updateAccountGroupRequest.pending.type]: tempUpdateAccountGroup,
    [updateAccountGroupRequest.rejected.type]: undoUpdateAccountGroup,
    [updateAccountGroupRequest.fulfilled.type]: updateAccountGroup,
  }
});

export const reducer = accountsSlice.reducer;
export const {
  setSelectedAccountGroup,
  setStatus,
} = accountsSlice.actions;
