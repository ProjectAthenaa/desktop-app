import {createSlice} from '@reduxjs/toolkit';
import setStatusReducer, {Status} from '../util/set-status';
import {ProxyList} from '../../../../types/proxy';
import setSelectedProxyListReducer from './reducers/set-selected-proxy-list';
import {
  createProxyList,
  createProxyListRequest,
  createTempProxyList,
  undoProxyListCreation
} from './reducers/create-proxy-list';
import {
  failedGetProxyLists,
  fetchingProxyLists,
  getProxyLists,
  getProxyListsRequest
} from './reducers/get-proxy-lists';
import {deleteProxyList, deleteProxyListRequest, tempDeleteProxyList} from './reducers/delete-proxy-list';
import {failedGetList, fetchingList, getProxyList, getListRequest} from './reducers/get-proxy-list';
import {
  tempUpdateProxyList,
  undoUpdateProxyList, updateProxyList,
  updateProxyListRequest
} from './reducers/update-proxy-list';

export interface ProxiesState {
  selectedProxyList: ProxyList | null;
  proxyLists: ProxyList[];
  prevProxyList: ProxyList | null;
  statuses: {
    proxyListsFetching: Status;
    proxyListFetching: Status;
    proxyListDeletion: Status;
    proxyListUpdating: Status;
    proxyListCreation: Status;
  };
}

const initialState: ProxiesState = {
  selectedProxyList: null,
  proxyLists: [],
  prevProxyList: null,
  statuses: {
    proxyListsFetching: Status.IDLE,
    proxyListFetching: Status.IDLE,
    proxyListDeletion: Status.IDLE,
    proxyListUpdating: Status.IDLE,
    proxyListCreation: Status.IDLE,
  },
};

const proxiesSlice = createSlice({
  name: 'proxies',
  initialState,
  reducers: {
    setSelectedProxyList: setSelectedProxyListReducer,
    setStatus: setStatusReducer,
  },
  extraReducers: {
    // Proxy Lists Creation
    [createProxyListRequest.pending.type]: createTempProxyList,
    [createProxyListRequest.rejected.type]: undoProxyListCreation,
    [createProxyListRequest.fulfilled.type]: createProxyList,

    // Proxy Lists Fetching
    [getProxyListsRequest.pending.type]: fetchingProxyLists,
    [getProxyListsRequest.rejected.type]: failedGetProxyLists,
    [getProxyListsRequest.fulfilled.type]: getProxyLists,

    // Proxy Lists Deletion
    [deleteProxyListRequest.pending.type]: tempDeleteProxyList,
    [deleteProxyListRequest.rejected.type]: undoProxyListCreation,
    [deleteProxyListRequest.fulfilled.type]: deleteProxyList,

    // Proxy List Fetching
    [getListRequest.pending.type]: fetchingList,
    [getListRequest.rejected.type]: failedGetList,
    [getListRequest.fulfilled.type]: getProxyList,

    // Proxy List Updating
    [updateProxyListRequest.pending.type]: tempUpdateProxyList,
    [updateProxyListRequest.rejected.type]: undoUpdateProxyList,
    [updateProxyListRequest.fulfilled.type]: updateProxyList,
  }
});

export const reducer = proxiesSlice.reducer;
export const {
  setSelectedProxyList,
  setStatus,
} = proxiesSlice.actions;
