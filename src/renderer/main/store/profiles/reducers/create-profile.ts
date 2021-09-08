import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProfileCreation} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfileGroupsProfile} from '../../../../../graphql/integration/handlers/profiles/get-group';

export const createProfileRequest = createAsyncThunk(
  'profiles/createProfile',
  async (profile: ProfileCreation): Promise<FetchedProfileGroupsProfile> => {
    return await ipcRenderer.invoke('createProfile', profile);
  }
);

export const createTempProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroupsProfile>): void => {
  state.statuses.profileCreation = Status.PENDING;

  state.profiles.push({
    ...action.payload,
    ID: 'temp'
  });
};

export const undoProfileCreation = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupCreation = Status.REJECTED;

  toast.error('There was an issue creating the profile at this time.');

  state.profiles = state.profiles.filter(profile => profile.ID !== 'temp');

  state.statuses.profileGroupCreation = Status.IDLE;
};

export const createProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroupsProfile>): void => {
  state.statuses.profileCreation = Status.FULFILLED;

  toast.success('Profile created.');

  state.profiles = state.profiles.map(profile =>
    profile.ID === 'temp'
    ?  action.payload
    : profile
  );

  state.statuses.profileCreation = Status.IDLE;
};
