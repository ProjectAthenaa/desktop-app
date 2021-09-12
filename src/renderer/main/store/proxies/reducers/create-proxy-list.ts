import {ProxiesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {ProxyList, NewProxyList} from '../../../../../types/proxy';

export const createProxyListRequest = createAsyncThunk(
  'proxies/createProxyList',
  async (proxyList: NewProxyList): Promise<ProxyList> => {
    return await ipcRenderer.invoke('createProxyList', proxyList);
  }
);

export const createTempProxyList = (state: Draft<ProxiesState>, action: PayloadAction<NewProxyList>) => {
  state.statuses.proxyListCreation = Status.PENDING;

  state.proxyLists.push({
    ...action.payload,
    ID: 'temp',
    Proxies: []
  });
};

export const undoProxyListCreation = (state: Draft<ProxiesState>, action: PayloadAction<NewProxyList>) => {
  state.statuses.proxyListCreation = Status.REJECTED;

  toast.error('There was an issue creating the proxy list at this time.');

  state.proxyLists = state.proxyLists.filter(proxyList => proxyList.ID !== 'temp');

  state.statuses.proxyListCreation = Status.IDLE;
};

export const createProxyList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListCreation = Status.FULFILLED;

  toast.success('Proxy list created.');

  state.proxyLists = state.proxyLists.map(proxyList =>
    proxyList.ID === 'temp'
      ?  action.payload
      : proxyList
  );

  state.selectedProxyList = action.payload;

  state.statuses.proxyListCreation = Status.IDLE;
};
