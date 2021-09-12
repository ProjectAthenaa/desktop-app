import {ProxiesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProxyList} from '../../../../../types/proxy';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getProxyListsRequest = createAsyncThunk(
  'proxies/getProxyLists',
  async (): Promise<ProxyList[]> => {
    return await ipcRenderer.invoke('getProxyLists');
  }
);

export const fetchingProxyLists = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListsFetching = Status.PENDING;
};

export const getProxyLists = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList[]>) => {
  state.statuses.proxyListsFetching = Status.FULFILLED;

  state.proxyLists = action.payload;

  if (state.proxyLists.length > 0) {
    state.selectedProxyList = state.proxyLists[0];
  }

  state.statuses.proxyListsFetching = Status.IDLE;
};

export const failedGetProxyLists = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListsFetching = Status.REJECTED;

  toast.error(`Failed to load your proxy lists at this time.`);

  state.statuses.proxyListsFetching = Status.IDLE;
};


