import {Draft, PayloadAction} from '@reduxjs/toolkit';

export enum Status {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}

const setStatus = <S extends { statuses: Record<string, Status>}, F>(state: Draft<S>, action: PayloadAction<{ for: F; status: Status }>): void => {
  state.statuses[action.payload.for as unknown as string] = action.payload.status;
};

export default setStatus;
