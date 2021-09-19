import {SettingsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {DelayType, Settings} from '../../../../../types/settings';

type SetDelay = {type: DelayType, value: number};

export const getSettingsRequest = createAsyncThunk(
  'settings/getSettings',
  async () => {
    return await ipcRenderer.invoke('getSettings');;
  }
);

export const getSettings = (state: Draft<SettingsState>, action: PayloadAction<Settings>): void => {
  state.DeclineWebhook = action.payload.DeclineWebhook;
  state.SuccessWebhook = action.payload.SuccessWebhook;
  state.CheckoutDelay = action.payload.CheckoutDelay;
  state.ATCDelay = action.payload.ATCDelay;
};

export const failedGetSettings = (): void => {
  toast.error('Failed to load your saved settings at this time.');
}
