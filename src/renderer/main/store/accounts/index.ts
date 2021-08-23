import { Site } from "../tasks";

export interface AccountGroup {
  ID: string;
  Name: string;
  Site: Site;
  Accounts: { [key: string]: string; };
}
