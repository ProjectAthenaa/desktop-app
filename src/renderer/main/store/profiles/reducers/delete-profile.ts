import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type DeletedProfile = {
  profileId: string;
};

export const deleteProfileRequest = createAsyncThunk(
  'profiles/deleteProfile',
  async ({ profileId }: DeletedProfile): Promise<string> => {
    return await ipcRenderer.invoke('deleteProfile', profileId) as string;
  }
);

export const tempDeleteProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileDeletion = Status.PENDING;
};

export const restoreDeletedProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileDeletion = Status.REJECTED;

  toast.error('There was an issue deleting the profile at this time.');

  state.statuses.profileDeletion = Status.IDLE;

};

export const deleteProfile = (state: Draft<ProfilesState>, action: PayloadAction<string>) => {
  state.statuses.profileDeletion = Status.FULFILLED;

  toast.success('Profile deleted.');

  state.profiles = state.profiles.filter(profile => profile.ID !== action.payload);
};
