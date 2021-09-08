import {ProfilesState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';

const setSelectedProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfile>): Draft<ProfilesState> => {
  return {
    ...state,
    selectedProfile: action.payload
  };
};

export default setSelectedProfile;
