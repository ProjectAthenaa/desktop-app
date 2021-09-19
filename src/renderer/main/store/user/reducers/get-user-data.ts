import {UserState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {User} from '../../../../../types/user';

export const getUserDataRequest = createAsyncThunk(
  'user/getUserData',
  async () => {
    return await ipcRenderer.invoke('getUserData');
  }
);

export const getUserData = (state: Draft<UserState>, action: PayloadAction<User>): void => {
  state.Theme = action.payload.Theme;
  state.DiscordDiscriminator = action.payload.DiscordDiscriminator;
  state.DiscordID = action.payload.DiscordID;
  state.DiscordAvatar = action.payload.DiscordAvatar;
  state.DiscordUsername = action.payload.DiscordUsername;
};

export const failedGetUserData = (): void => {
  toast.error('Failed to get your user information at this time.');
}
