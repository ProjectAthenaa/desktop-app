import {ProxiesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProxyList} from '../../../../../types/proxy';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const updateProxyListRequest = createAsyncThunk(
  'proxies/updateProxyList',
  async ({ ID, ...updatedPayload }: ProxyList): Promise<ProxyList> => {
    return await ipcRenderer.invoke('updateProxyList', ID, updatedPayload) as ProxyList;
  }
);

export const tempUpdateProxyList = (state: Draft<ProxiesState>, action: PendingAction) => {
  const pendingBody = action.meta.arg as ProxyList;

  state.prevProxyList = state.proxyLists.find(proxyList => proxyList.ID === pendingBody.ID);
  state.statuses.proxyListUpdating = Status.PENDING;

  state.proxyLists = state.proxyLists.map(proxyList =>
    proxyList.ID === pendingBody.ID
      ? { ...proxyList, ...pendingBody }
      : proxyList
  );
};

export const updateProxyList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListUpdating = Status.FULFILLED;

  state.proxyLists = state.proxyLists.map(proxyList => {
    if (proxyList.ID !== action.payload.ID) return proxyList;
    return {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Proxies: action.payload.Proxies,
      Type: action.payload.Type,
    };
  });

  state.selectedProxyList = action.payload;

  toast.success('Proxy list updated.');

  state.statuses.proxyListUpdating = Status.IDLE;
};

export const undoUpdateProxyList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>) => {
  state.statuses.proxyListUpdating = Status.REJECTED;

  state.proxyLists = state.proxyLists.map(proxyList =>
    proxyList.ID === state.prevProxyList.ID
      ? state.prevProxyList
      : proxyList
  );

  toast.error('Proxy list update failed.');

  state.statuses.proxyListUpdating = Status.IDLE;
};
