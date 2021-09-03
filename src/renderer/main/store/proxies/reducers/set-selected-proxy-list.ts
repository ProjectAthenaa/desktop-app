import {ProxiesState} from '../index';
import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {ProxyList} from '../../../../../types/proxy';

export const setSelectedProxyList = (state: Draft<ProxiesState>, action: PayloadAction<ProxyList>): Draft<ProxiesState> => {
  return {
    ...state,
    selectedProxyList: action.payload
  };
};

export default setSelectedProxyList;
