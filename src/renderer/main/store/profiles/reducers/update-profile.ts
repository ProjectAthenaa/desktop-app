import {ProfilesState} from '../index';
import {createAsyncThunk, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProfileCreation} from '../../../../../types/profile';
import ipcRenderer from '../../../util/ipc-renderer';
import {Status} from '../../util/set-status';
import {toast} from 'react-toastify';
import {FetchedProfile} from '../../../../../graphql/integration/handlers/profiles/get-profile';

export interface ProfileUpdate extends ProfileCreation {
  ID: string;
}
export const updateProfileRequest = createAsyncThunk(
  'profiles/updateProfile',
  async ({ ID, ...updatedPayload }: ProfileUpdate) => {
    return await ipcRenderer.invoke('updateProfile', ID, updatedPayload);
  }
);

export const updateProfile = (state: Draft<ProfilesState>, action: PayloadAction<FetchedProfile>): void => {
  state.statuses.profileUpdating = Status.FULFILLED;

  state.selectedProfile = action.payload;
  state.profiles = state.profiles.map(profile =>
    profile.ID !== action.payload.ID
    ? profile
    : {
      ID: action.payload.ID,
      Name: action.payload.Name,
      Email: action.payload.Email,
      Shipping: {
        ID: action.payload.Shipping.ID,
        FirstName: action.payload.Shipping.FirstName,
        LastName: action.payload.Shipping.LastName,
        PhoneNumber: action.payload.Shipping.PhoneNumber,
        ShippingAddress: {
          AddressLine: action.payload.Shipping.ShippingAddress.AddressLine,
        },
        BillingIsShipping: action.payload.Shipping.BillingIsShipping,
      }
    }
  );

  toast.success('Profile updated.');

  state.statuses.profileUpdating = Status.IDLE;
};

export const updatingProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileUpdating = Status.PENDING;
};

export const undoUpdateProfile = (state: Draft<ProfilesState>): void => {
  state.statuses.profileUpdating = Status.REJECTED;

  toast.error('Profile update failed.');

  state.statuses.profileUpdating = Status.IDLE;
};
