import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile, ProfileCreation} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

export const createProfileRequest = createAsyncThunk(
  'profiles/createProfile',
  async (profile: ProfileCreation): Promise<Profile> => {
    return await ipcRenderer.invoke('createProfile', profile) as Profile;
  }
);

export const createTempProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileCreation = Status.PENDING;

  console.log('tst 1');
  state.profiles.push({
    ...action.payload,
    ID: 'temp'
  });
};

export const undoProfileCreation = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileGroupCreation = Status.REJECTED;

  toast.error('There was an issue creating the profile at this time.');
  console.log('tst 13');
  state.profiles = state.profiles.filter(profile => profile.ID !== 'temp');

  state.statuses.profileGroupCreation = Status.IDLE;
};

export const createProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>) => {
  state.statuses.profileCreation = Status.FULFILLED;

  toast.success('Profile created.');

  console.log('tst 1');

  state.profiles = state.profiles.map(profile =>
    profile.ID === 'temp'
    ?  action.payload
    : profile
  );

  state.statuses.profileCreation = Status.IDLE;
};
