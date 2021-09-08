import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';

export const getProfileRequest = createAsyncThunk(
  'profiles/getProfile',
  async (profileId: string): Promise<FetchedProfile> => {
    return await ipcRenderer.invoke('getProfile', profileId) as Profile;
  }
);

export const fetchingProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileFetching = Status.PENDING;
};

export const getProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfile>): void => {
  state.statuses.profileFetching = Status.FULFILLED;
  state.selectedProfile = action.payload;
  state.statuses.profileFetching = Status.IDLE;
};

export const failedGetProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileFetching = Status.REJECTED;

  toast.error(`Failed to load your profile at this time.`);

  state.statuses.profileFetching = Status.IDLE;
};
