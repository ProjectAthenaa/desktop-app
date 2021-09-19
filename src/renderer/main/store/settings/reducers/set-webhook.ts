import {SettingsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {WebhookType} from '../../../../../types/settings';

type SetWebhook = {type: WebhookType, value: string};

export const setWebhookRequest = createAsyncThunk(
  'settings/setWebhook',
  async ({ type, value }: SetWebhook) => {
    await ipcRenderer.invoke('setWebhook', type, value);

    return {value, type};
  }
);

export const setWebhook = (state: Draft<SettingsState>, action: PayloadAction<SetWebhook>): void => {
  toast.success('Webhook saved.');

  if (action.payload.type === WebhookType.SUCCESS) {
    state.SuccessWebhook = action.payload.value;
  } else {
    state.DeclineWebhook = action.payload.value;
  }
};
