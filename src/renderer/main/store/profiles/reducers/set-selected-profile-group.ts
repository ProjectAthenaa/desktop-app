import {ProfilesState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProfileGroup} from '../../../../../types/profile';

export const setSelectedProfile = (state: Draft<ProfilesState>, action: PayloadAction<ProfileGroup>): Draft<ProfilesState> => {
  return {
    ...state,
    selectedProfileGroup: action.payload
  };
};

export default setSelectedProfile;
