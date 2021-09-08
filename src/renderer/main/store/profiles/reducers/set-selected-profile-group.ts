import {ProfilesState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {FetchedProfileGroup} from '../../../../../graphql/integration/handlers/profiles/get-group';

export const setSelectedProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfileGroup>): Draft<ProfilesState> => {
  return {
    ...state,
    selectedProfileGroup: action.payload
  };
};

export default setSelectedProfile;
