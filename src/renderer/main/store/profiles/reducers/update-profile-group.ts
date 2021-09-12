import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProfileGroup} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

type UpdatedProfileGroup = {
  profileGroupId: string;
  Name: string;
};

export const updateProfileGroupRequest = createAsyncThunk(
  'profiles/updateProfileGroup',
  async ({ profileGroupId, ...updatedPayload }: UpdatedProfileGroup) => {
    return await ipcRenderer.invoke('updateProfileGroup', profileGroupId, updatedPayload) as ProfileGroup;
  }
);

export const tempUpdateProfileGroup = (state: Draft<ProfilesState>, action: PendingAction): void => {
  state.statuses.profileGroupUpdating = Status.PENDING;

  const pendingBody = action.meta.arg as UpdatedProfileGroup;

  state.prevProfileGroup = state.selectedProfileGroup;
  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID === pendingBody.profileGroupId
      ? { ...profileGroup, Name: pendingBody.Name }
      : profileGroup
  );
};

export const updateProfileGroup = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroup>): void => {
  state.statuses.profileGroupUpdating = Status.FULFILLED;

  state.selectedProfileGroup = action.payload;
  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID !== action.payload.ID
    ? profileGroup
    : {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Profiles: action.payload.Profiles,
    }
  );

  toast.success('Profile group updated.');

  state.prevProfileGroup = null;
  state.statuses.profileGroupUpdating = Status.IDLE;
};

export const undoUpdateProfileGroup = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupUpdating = Status.REJECTED;

  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID === state.prevProfileGroup.ID
      ? state.prevProfileGroup
      : profileGroup
  );
  state.prevProfileGroup = null;

  toast.error('Profile group update failed.');

  state.statuses.profileGroupUpdating = Status.IDLE;
};
