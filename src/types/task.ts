import { ProfileGroup } from "./profile";
import { ProxyList } from "./proxy";

export enum LookupType {
  Link = 'Link',
  Keywords = 'Keywords',
  Other = 'Other'
}

export enum Site {
  FinishLine     = "FinishLine",
  JD_Sports      = "JD_Sports",
  YeezySupply    = "YeezySupply",
  Supreme        = "Supreme",
  Eastbay_US     = "Eastbay_US",
  Champs_US      = "Champs_US",
  Footaction_US  = "Footaction_US",
  Footlocker_US  = "Footlocker_US",
  Bestbuy        = "Bestbuy",
  Pokemon_Center = "Pokemon_Center",
  Panini_US      = "Panini_US",
  Topss          = "Topss",
  Nordstorm      = "Nordstorm",
  End            = "End",
  Target         = "Target",
  Amazon         = "Amazon",
  Solebox        = "Solebox",
  Onygo          = "Onygo",
  Snipes         = "Snipes",
  Ssense         = "Ssense",
  Walmart        = "Walmart",
  Hibbet         = "Hibbet",
}

export enum TaskStatus {
  Padding = "PADDING",
  Starting = "STARTING",
  Monitoring = "MONITORING",
  Product_Found = "PRODUCT_FOUND",
  Adding_To_Cart = "ADDING_TO_CART",
  Solving_Captcha = "SOLVING_CAPTCHA",
  Checking_Out = "CHECKING_OUT",
  Checked_Out = "CHECKED_OUT",
  Error = "ERROR",
  Action_Needed = "ACTION_NEEDED",
  Generating_Cookies = "GENERATING_COOKIES",
  Task_Not_Found = "TASK_NOT_FOUND",
  Waiting_For_Checkout = "WAITING_FOR_CHECKOUT",
  Checkout_Error = "CHECKOUT_ERROR",
  Checkout_Failed = "CHECKOUT_FAILED",
  Checkout_Duplicate = "CHECKOUT_DUPLICATE",
  Checkout_OOS = "CHECKOUT_OOS",
  Checkout_Decline = "CHECKOUT_DECLINE",
  Checkout_Waiting_For_3DS = "CHECKOUT_WAITING_FOR_3DS",
  Checkout_3DS_ERROR = "CHECKOUT_3DS_ERROR",
  Stopped = "STOPPED",
  Pausing = "PAUSING",
  Paused = "PAUSED",
  Continuing = "CONTINUING",
  Continued = "CONTINUED",
  Restarting = "RESTARTING",
}

export interface Product {
  ID: string;
  Name: string;
  Image: string;
  LookupType: LookupType;
  PositiveKeywords: string[];
  NegativeKeywords: string[];
  Link: string;
  Quantity: number;
  Sizes: string[];
  Colors: string[];
  Site: Site
  Metadata: { [key: string]: never; };
}

export interface Task {
  ID: string;
  StartTime: string;
  Product: Product;
  ProxyList: ProxyList;
  ProfileGroup: ProfileGroup;
  Status: TaskStatus;
}

export interface TaskGroup {
  ID: string;
  Name: string;
}
