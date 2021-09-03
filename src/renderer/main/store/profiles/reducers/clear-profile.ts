import {ProfilesState} from '../index';
import {Draft} from '@reduxjs/toolkit';

const clearProfile = (state: Draft<ProfilesState>): Draft<ProfilesState> => {
  return {
    ...state,
    selectedProfile: null
  };
};

export default clearProfile;
