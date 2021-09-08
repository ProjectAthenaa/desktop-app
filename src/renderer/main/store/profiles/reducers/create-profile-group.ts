import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import { toast } from 'react-toastify';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

type ProfileGroupCreation = {
  Name?: string;
};

export const createProfileGroupRequest = createAsyncThunk(
  'profiles/createProfileGroup',
  async (profileGroup: ProfileGroupCreation) => {
    return await ipcRenderer.invoke('createProfileGroup', profileGroup);
  }
);

export const createTempProfileGroup = (state: Draft<ProfilesState>, action: PendingAction): void => {
  const pendingBody: ProfileGroupCreation = action.meta.arg;

  state.statuses.profileGroupCreation = Status.PENDING;

  state.profileGroups.push({
    ID: 'temp',
    Name: pendingBody.Name,
    Profiles: [],
  });
};

export const undoProfileGroup = (state: Draft<ProfilesState>): void => {
  state.profileGroups = state.profileGroups.filter(profileGroup => profileGroup.ID !== "temp");

  state.statuses.profileGroupCreation = Status.REJECTED;
  toast.error('There was an issue creating the profile group at this time.');

  state.statuses.profileGroupCreation = Status.IDLE;
};

export const createProfileGroup = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroup>): void => {
  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID === 'temp'
      ? action.payload
      : profileGroup
  );

  state.statuses.profileGroupCreation = Status.FULFILLED;
  toast.success('Profile group created.');

  state.selectedProfileGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
    Profiles: action.payload.Profiles
  };

  state.statuses.profileGroupCreation = Status.IDLE;
};

// export default createProfileGroup;
