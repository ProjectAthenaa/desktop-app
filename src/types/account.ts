import { Site } from "./task";

export interface AccountGroup {
  ID: string;
  Name: string;
  Site: string;
  Accounts: Record<string, string>;
}
export interface AccountGroupInput {
  Name: string;
  Site: Site;
  Accounts: Record<string, string>;
}
