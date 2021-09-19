import {createSlice} from '@reduxjs/toolkit';
import {setDelayRequest, setDelay} from './reducers/set-delay';
import {setWebhook, setWebhookRequest} from './reducers/set-webhook';


export interface SettingsState {
  SuccessWebhook: string;
  DeclineWebhook: string;
  CheckoutDelay: number;
  ATCDelay: number;
}

const initialState: SettingsState = {
  SuccessWebhook: '',
  DeclineWebhook: '',
  CheckoutDelay: 0,
  ATCDelay: 0,
};

const tasksSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: {
    [setDelayRequest.fulfilled.type]: setDelay,
    [setWebhookRequest.fulfilled.type]: setWebhook,
  }
});

export const reducer = tasksSlice.reducer;
