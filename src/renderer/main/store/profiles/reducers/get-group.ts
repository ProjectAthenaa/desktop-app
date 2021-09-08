import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import ipcRenderer from '../../../util/ipc-renderer';
import {toast} from 'react-toastify';
import {Status} from '../../util/set-status';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

export const getGroupRequest = createAsyncThunk(
  'profiles/getGroup',
  async (groupId: string): Promise<FetchedProfileGroup> => {
    return await ipcRenderer.invoke('getProfileGroup', groupId);
  }
);

export const fetchingGroup = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupFetching = Status.PENDING;
};

export const getGroup = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroup>): void => {
  state.profiles = action.payload.Profiles;
  state.statuses.profileGroupFetching = Status.FULFILLED;

  toast.success(`${action.payload.Name} loaded.`);

  state.selectedProfileGroup = {
    ID: action.payload.ID,
    Name: action.payload.Name,
    Profiles: action.payload.Profiles,
  };

  state.statuses.profileGroupFetching = Status.IDLE;
};

export const failedGetGroup = (state: Draft<ProfilesState>): void => {
  state.statuses.profileGroupFetching = Status.REJECTED;

  toast.error(`Failed to load your profile group at this time.`);

  state.statuses.profileGroupFetching = Status.IDLE;
};
