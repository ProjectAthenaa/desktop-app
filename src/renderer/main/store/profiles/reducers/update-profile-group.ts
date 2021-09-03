import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile, ProfileGroup} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {PendingAction} from '../../util/async-action-types';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';

type UpdatedProfileGroup = {
  profileGroupId: string;
  Name: string;
};

export const updateProfileGroupRequest = createAsyncThunk(
  'profiles/updateProfileGroup',
  async ({ profileGroupId, ...updatedPayload }: UpdatedProfileGroup): Promise<ProfileGroup> => {
    return await ipcRenderer.invoke('updateProfileGroup', profileGroupId, updatedPayload) as ProfileGroup;
  }
);

export const tempUpdateProfileGroup = (state: Draft<ProfilesState>, action: PendingAction) => {
  state.statuses.profileGroupUpdating = Status.PENDING;

  const pendingBody = action.meta.arg as UpdatedProfileGroup;

  state.prevProfileGroup = state.profileGroups.find(profileGroup => profileGroup.ID === pendingBody.profileGroupId);
  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID === pendingBody.profileGroupId
      ? { ...profileGroup, Name: pendingBody.Name }
      : profileGroup
  );
};

export const updateProfileGroup = (state: Draft<ProfilesState>, action: PayloadAction<ProfileGroup>) => {
  state.statuses.profileGroupUpdating = Status.FULFILLED;

  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID !== action.payload.ID
    ? profileGroup
    : {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Profiles: action.payload.Profiles,
    }
  );

  toast.error('Profile group updated.');

  state.prevProfileGroup = null;
  state.statuses.profileGroupUpdating = Status.IDLE;
};

export const undoUpdateProfileGroup = (state: Draft<ProfilesState>, action: PayloadAction<ProfileGroup>) => {
  state.statuses.profileGroupUpdating = Status.REJECTED;

  state.profileGroups = state.profileGroups.map(profileGroup =>
    profileGroup.ID === state.prevProfileGroup.ID
      ? state.prevProfileGroup
      : profileGroup
  );

  toast.error('Profile group update failed.');

  state.statuses.profileGroupUpdating = Status.IDLE;
};
