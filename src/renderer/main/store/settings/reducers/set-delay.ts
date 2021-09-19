import {SettingsState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {DelayType} from '../../../../../types/settings';

type SetDelay = {type: DelayType, value: number};

export const setDelayRequest = createAsyncThunk(
  'settings/setDelay',
  async ({ type, value }: SetDelay) => {
    await ipcRenderer.invoke('setDelay', type, value);

    return {value, type};
  }
);

export const setDelay = (state: Draft<SettingsState>, action: PayloadAction<SetDelay>): void => {
  toast.success('Delay saved.');

  if (action.payload.type === DelayType.ATC) {
    state.ATCDelay = action.payload.value;
  } else {
    state.CheckoutDelay = action.payload.value;
  }
};
