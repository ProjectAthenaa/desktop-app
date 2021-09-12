import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type DeletedProfileGroup = {
  profileGroupId: string;
};

export const deleteProfileGroupRequest = createAsyncThunk(
  'profiles/deleteProfileGroupGroup',
  async ({ profileGroupId }: DeletedProfileGroup): Promise<string> => {
    await ipcRenderer.invoke('deleteProfileGroup', profileGroupId);

    return profileGroupId;
  }
);

export const tempDeleteProfileGroup = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupDeletion = Status.PENDING;
};

export const restoreDeletedProfileGroup = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupDeletion = Status.REJECTED;

  toast.error('There was an issue deleting the profile group at this time.');

  state.statuses.profileGroupDeletion = Status.IDLE;
};

export const deleteProfileGroup = (state: Draft<ProfilesState>, action: PayloadAction<string>): void => {
  state.statuses.profileGroupDeletion = Status.FULFILLED;

  toast.success('Profile group deleted.');

  state.profileGroups = state.profileGroups.filter(profileGroup => profileGroup.ID !== action.payload);
};

