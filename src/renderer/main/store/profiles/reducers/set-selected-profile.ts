import {ProfilesState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {Profile} from '../../../../../types/profile';

const setSelectedProfile = (state: Draft<ProfilesState>, action: PayloadAction<Profile>): Draft<ProfilesState> => {
  return {
    ...state,
    selectedProfile: action.payload
  };
};

export default setSelectedProfile;
