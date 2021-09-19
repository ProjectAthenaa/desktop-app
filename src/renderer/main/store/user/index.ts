import {createSlice} from '@reduxjs/toolkit';
import {User, Theme} from '../../../../types/user';
import {failedGetUserData, getUserData, getUserDataRequest} from './reducers/get-user-data';


export type UserState = User

const initialState: UserState = {
  ID: '',
  Theme: Theme.Variation1,
  DiscordID: '',
  DiscordAvatar: '',
  DiscordDiscriminator: '',
  DiscordUsername: ''
};

const tasksSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserDataRequest.fulfilled.type]: getUserData,
    [getUserDataRequest.rejected.type]: failedGetUserData,
  }
});

export const reducer = tasksSlice.reducer;
