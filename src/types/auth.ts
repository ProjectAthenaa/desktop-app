export enum DeviceType {
  Unknown = 'Unknown',
  Mobile = 'Mobile',
  Desktop = 'Desktop',
}

export enum Theme {
  VARIATION_1 = 'VARIATION_1',
  VARIATION_2 = 'VARIATION_2',
  VARIATION_3 = 'VARIATION_3',
  VARIATION_4 = 'VARIATION_4',
}

export interface Session {
  ID: string;
  HardwareID: string;
}

export interface LoginResponse {
  Session: Session;
  Theme: Theme;
  IsFirstLogin: boolean;
}

export interface SessionInput {
  ID: string;
  HardwareID: string;
}

export interface LoginParameters {
  DeviceName: string;
  OS: string;
  DeviceType: DeviceType;
  HardwareID: string;
}
