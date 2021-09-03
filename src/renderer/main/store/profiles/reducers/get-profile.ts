import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getProfileRequest = createAsyncThunk(
  'profiles/getProfile',
  async (profileId: string): Promise<Profile> => {
    return await ipcRenderer.invoke('getProfile', profileId) as Profile;
  }
);

export const fetchingProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileFetching = Status.PENDING;
};

export const getProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileFetching = Status.FULFILLED;
  state.selectedProfile = action.payload;
  state.statuses.profileFetching = Status.IDLE;
};

export const failedGetProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileFetching = Status.REJECTED;

  toast.error(`Failed to load your profile at this time.`);

  state.statuses.profileFetching = Status.IDLE;
};
