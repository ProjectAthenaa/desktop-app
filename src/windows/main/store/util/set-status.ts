import {Draft, PayloadAction} from '@reduxjs/toolkit';

export type StateStatus = "idle" | "pending";

const setStatus = <T extends { status: StateStatus }>(state: Draft<T>, action: PayloadAction): void => {
  switch (action.type) {
    case "IDLE":
      state.status = "idle";
      break;
    case "PENDING":
      state.status = "pending";
      break;
    default:
      throw Error(`Action type of '${action.type}' not supported.`);
  }
};

export default setStatus;
