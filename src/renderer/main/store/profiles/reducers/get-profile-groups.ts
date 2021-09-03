import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile, ProfileGroup} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const getProfileGroupsRequest = createAsyncThunk(
  'profiles/getProfileGroups',
  async (): Promise<ProfileGroup[]> => {
    return await ipcRenderer.invoke('getProfileGroups');
  }
);

export const fetchingProfileGroups = (state: Draft<ProfilesState>, action: PayloadAction<ProfileGroup>) => {
  state.statuses.profileGroupFetching = Status.PENDING;
};

export const getProfileGroups = (state: Draft<ProfilesState>, action: PayloadAction<ProfileGroup[]>) => {
  state.statuses.profileGroupFetching = Status.FULFILLED;
  state.profileGroups = action.payload;
  state.statuses.profileGroupFetching = Status.IDLE;
};

export const failedGetProfileGroups = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your profile groups at this time.`);

  state.statuses.profileGroupFetching = Status.IDLE;
};


