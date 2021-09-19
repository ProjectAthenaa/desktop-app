import {createSlice} from '@reduxjs/toolkit';
import { Status } from '../../../../types/task';

export interface Notification {
  ID: string;
  Status: Status;
  Message: string;
}

export interface ProfilesState {
  notifications: Notification[];
  seen: boolean;
}

const initialState: ProfilesState = {
  notifications: [],
  seen: true,
};

const profilesSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    sawNotifications(state) {
      state.seen = true;
    },
    clearNotifications(state) {
      state.notifications = [];
      state.seen = true;
    },
    addNotification(state, action) {
      if (state.notifications.length > 249) {
        state.notifications.pop();
      }
      state.notifications.unshift(action.payload);
      state.seen = false;
    }
  }
});

export const reducer = profilesSlice.reducer;
export const {
  sawNotifications,
  addNotification,
  clearNotifications
} = profilesSlice.actions;
