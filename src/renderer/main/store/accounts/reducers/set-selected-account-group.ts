import {AccountsState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {AccountGroup} from '../../../../../types/account';

export const setSelectedAccountGroup = (state: Draft<AccountsState>, action: PayloadAction<AccountGroup>): Draft<AccountsState> => {
  return {
    ...state,
    selectedAccountGroup: action.payload
  };
};

export default setSelectedAccountGroup;
