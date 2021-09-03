import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';


export const updateProfileRequest = createAsyncThunk(
  'profiles/updateProfile',
  async ({ ID, ...updatedPayload }: Profile): Promise<Profile> => {
    return await ipcRenderer.invoke('updateProfile', ID, updatedPayload) as Profile;
  }
);

export const updateProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileUpdating = Status.FULFILLED;

  state.profiles = state.profiles.map(profile =>
    profile.ID !== action.payload.ID
    ? profile
    : action.payload
  );

  toast.success('Profile updated.')

  state.statuses.profileUpdating = Status.IDLE;
};

export const updatingProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileUpdating = Status.PENDING;
}

export const undoUpdateProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileUpdating = Status.REJECTED;

  toast.error('Profile update failed.');

  state.statuses.profileUpdating = Status.IDLE;
};
