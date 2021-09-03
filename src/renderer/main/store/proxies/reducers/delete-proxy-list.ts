import {ProxiesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type DeletedTaskList = {
  taskListId: string;
};

export const deleteProxyListRequest = createAsyncThunk(
  'proxies/deleteProxyList',
  async ({ taskListId }: DeletedTaskList): Promise<string> => {
    await ipcRenderer.invoke('deleteProxyList', taskListId);
    return taskListId;
  }
);

export const tempDeleteProxyList = (state: Draft<ProxiesState>, action: PayloadAction<string>) => {
  state.statuses.proxyListDeletion = Status.PENDING;
};

export const restoreDeletedProxyList = (state: Draft<ProxiesState>, action: PayloadAction<string>) => {
  state.statuses.proxyListDeletion = Status.REJECTED;

  toast.error('There was an issue deleting the proxy list at this time.');

  state.statuses.proxyListDeletion = Status.IDLE;
};

export const deleteProxyList = (state: Draft<ProxiesState>, action: PayloadAction<string>) => {
  state.statuses.proxyListDeletion = Status.FULFILLED;

  toast.success('Task list deleted.');

  state.proxyLists = state.proxyLists.filter(proxyList => proxyList.ID !== action.payload);
};

