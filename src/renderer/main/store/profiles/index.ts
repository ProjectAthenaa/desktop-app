import {createSlice} from '@reduxjs/toolkit';
import clearProfileReducer from './reducers/clear-profile';
import {failedGetProfileGroups, fetchingProfileGroups, getProfileGroups, getProfileGroupsRequest} from './reducers/get-profile-groups';
import {
  createProfileGroup,
  createProfileGroupRequest,
  createTempProfileGroup,
  undoProfileGroup
} from './reducers/create-profile-group';
import {Profile, ProfileGroup} from '../../../../types/profile';
import setSelectedProfileReducer from './reducers/set-selected-profile';
import setSelectedProfileGroupReducer from './reducers/set-selected-profile-group';
import setStatusReducer, {Status} from '../util/set-status';
import {deleteProfileGroup, deleteProfileGroupRequest, tempDeleteProfileGroup} from './reducers/delete-profile-group';
import {
  tempUpdateProfileGroup,
  undoUpdateProfileGroup,
  updateProfileGroup,
  updateProfileGroupRequest
} from './reducers/update-profile-group';
import {fetchingProfile, getProfile, getProfileRequest} from './reducers/get-profile';
import {createProfile, createProfileRequest, createTempProfile} from './reducers/create-profile';
import {deleteProfile, deleteProfileRequest, restoreDeletedProfile, tempDeleteProfile} from './reducers/delete-profile';
import {undoUpdateProfile, updateProfile, updateProfileRequest, updatingProfile} from './reducers/update-profile';
import {failedGetGroup, fetchingGroup, getGroup, getGroupRequest} from './reducers/get-group';

export enum ProfileStatusType {
  profileCreation = 'profileCreation'
}

export interface ProfilesState {
  selectedProfileGroup: ProfileGroup | null;
  selectedProfile: Profile | null;
  profileGroups: ProfileGroup[];
  profiles: Profile[];
  prevProfileGroup: ProfileGroup | null;
  prevProfile: Profile | null;
  statuses: {
    profileGroupFetching: Status;
    profileGroupCreation: Status;
    profileGroupDeletion: Status;
    profileGroupUpdating: Status;
    profileFetching: Status;
    profileCreation: Status;
    profileDeletion: Status;
    profileUpdating: Status;
  };
}

const initialState: ProfilesState = {
  selectedProfileGroup: null,
  selectedProfile: null,
  profileGroups: [],
  profiles: [],
  prevProfileGroup: null,
  prevProfile: null,
  statuses: {
    profileGroupFetching: Status.IDLE,
    profileGroupCreation: Status.IDLE,
    profileGroupDeletion: Status.IDLE,
    profileGroupUpdating: Status.IDLE,
    profileFetching: Status.IDLE,
    profileCreation: Status.IDLE,
    profileDeletion: Status.IDLE,
    profileUpdating: Status.IDLE,
  },
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setSelectedProfile: setSelectedProfileReducer,
    setSelectedProfileGroup: setSelectedProfileGroupReducer,
    clearProfile: clearProfileReducer,
    setStatus: setStatusReducer,
  },
  extraReducers: {
    // Profile Groups Fetching
    [getProfileGroupsRequest.pending.type]: fetchingProfileGroups,
    [getProfileGroupsRequest.rejected.type]: failedGetProfileGroups,
    [getProfileGroupsRequest.fulfilled.type]: getProfileGroups,

    // Profile Group Fetching
    [getGroupRequest.pending.type]: fetchingGroup,
    [getGroupRequest.rejected.type]: failedGetGroup,
    [getGroupRequest.fulfilled.type]: getGroup,

    // Profile Group Creation
    [createProfileGroupRequest.pending.type]: createTempProfileGroup,
    [createProfileGroupRequest.rejected.type]: undoProfileGroup,
    [createProfileGroupRequest.fulfilled.type]: createProfileGroup,

    // Profile Group Deletion
    [deleteProfileGroupRequest.pending.type]: tempDeleteProfileGroup,
    [deleteProfileGroupRequest.rejected.type]: undoProfileGroup,
    [deleteProfileGroupRequest.fulfilled.type]: deleteProfileGroup,

    // Profile Group Modification
    [updateProfileGroupRequest.pending.type]: tempUpdateProfileGroup,
    [updateProfileGroupRequest.rejected.type]: undoUpdateProfileGroup,
    [updateProfileGroupRequest.fulfilled.type]: updateProfileGroup,

    // Profile Fetching
    [getProfileRequest.pending.type]: fetchingProfile,
    [getProfileRequest.rejected.type]: fetchingProfile,
    [getProfileRequest.fulfilled.type]: getProfile,

    // Profile Creation
    [createProfileRequest.pending.type]: createTempProfile,
    [createProfileRequest.rejected.type]: fetchingProfile,
    [createProfileRequest.fulfilled.type]: createProfile,

    // Profile Deletion
    [deleteProfileRequest.pending.type]: tempDeleteProfile,
    [deleteProfileRequest.rejected.type]: restoreDeletedProfile,
    [deleteProfileRequest.fulfilled.type]: deleteProfile,

    // Profile Modification
    [updateProfileRequest.pending.type]: updatingProfile,
    [updateProfileRequest.rejected.type]: undoUpdateProfile,
    [updateProfileRequest.fulfilled.type]: updateProfile,
  }
});

export const reducer = profilesSlice.reducer;
export const {
  setSelectedProfile,
  setSelectedProfileGroup,
  clearProfile,
  setStatus,
} = profilesSlice.actions;
