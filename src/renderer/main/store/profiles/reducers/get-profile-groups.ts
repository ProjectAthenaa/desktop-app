import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProfileGroup} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfileGroups} from '../../../../../graphql/integration/handlers/profiles/get-profile-groups';
import { FetchedProfileGroup } from '../../../../../graphql/integration/handlers/profiles/get-group';

export const getProfileGroupsRequest = createAsyncThunk(
  'profiles/getProfileGroups',
  async () => {
    return await ipcRenderer.invoke('getProfileGroups');
  }
);

export const fetchingProfileGroups = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupFetching = Status.PENDING;
};

export const getProfileGroups = (state: Draft<ProfilesState>, action: PayloadAction<{ groups: FetchedProfileGroups, selectedProfileGroup: FetchedProfileGroup | null }>): void => {
  state.statuses.profileGroupFetching = Status.FULFILLED;
  state.profileGroups = action.payload.groups;

  if (action.payload.groups.length > 0 && action.payload.selectedProfileGroup) {
    state.selectedProfileGroup = action.payload.selectedProfileGroup;
  }

  state.statuses.profileGroupFetching = Status.IDLE;
};

export const failedGetProfileGroups = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your profile groups at this time.`);

  state.statuses.profileGroupFetching = Status.IDLE;
};


