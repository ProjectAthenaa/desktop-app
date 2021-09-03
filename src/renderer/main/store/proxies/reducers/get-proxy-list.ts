import {ProxiesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {Status} from '../../util/set-status';
import {ProxyList} from '../../../../../types/proxy';

export const getListRequest = createAsyncThunk(
  'proxies/getProxyList',
  async (listId: string): Promise<ProxyList> => {
    return await ipcRenderer.invoke('getProxyList', listId);
  }
);

export const fetchingList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListFetching = Status.PENDING;
};

export const getProxyList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListFetching = Status.FULFILLED;

  toast.success(`${action.payload.Name} loaded.`);

  state.selectedProxyList = {
    ID: action.payload.ID,
    Name: action.payload.Name,
    Proxies: action.payload.Proxies,
    Type: action.payload.Type
  };

  state.statuses.proxyListFetching = Status.IDLE;
};

export const failedGetList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListFetching = Status.REJECTED;

  toast.error(`Failed to load your proxy list at this time.`);

  state.statuses.proxyListFetching = Status.IDLE;
};
