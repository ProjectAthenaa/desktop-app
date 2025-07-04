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
  Status: Status;
}

export interface TaskGroup {
  ID: string;
  Name: string;
}

export type TaskCreation = {
  StartTime?: string;
  Product: {
    Name: string;
    Image?: string;
    LookupType: LookupType;
    PositiveKeywords: string[];
    NegativeKeywords: string[];
    Link?: string;
    Quantity?: number;
    Sizes: string[];
    Colors: string[];
    Site: Site;
    Metadata: Record<string, string>;
  };
  ProxyListID: string;
  ProfileGroupID: string;
  TaskGroupID: string;
};

export type TaskGroupCreation = {
  Name?: string;
};

export enum Status {
  PADDING = 'PADDING',
  STARTING = 'STARTING',
  MONITORING = 'MONITORING',
  PRODUCT_FOUND = 'PRODUCT_FOUND',
  ADDING_TO_CART = 'ADDING_TO_CART',
  SOLVING_CAPTCHA = 'SOLVING_CAPTCHA',
  CHECKING_OUT = 'CHECKING_OUT',
  CHECKED_OUT = 'CHECKED_OUT',
  ERROR = 'ERROR',
  ACTION_NEEDED = 'ACTION_NEEDED',
  GENERATING_COOKIES = 'GENERATING_COOKIES',
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  WAITING_FOR_CHECKOUT = 'WAITING_FOR_CHECKOUT',
  CHECKOUT_ERROR = 'CHECKOUT_ERROR',
  CHECKOUT_FAILED = 'CHECKOUT_FAILED',
  CHECKOUT_DUPLICATE = 'CHECKOUT_DUPLICATE',
  CHECKOUT_OOS = 'CHECKOUT_OOS',
  CHECKOUT_DECLINE = 'CHECKOUT_DECLINE',
  CHECKOUT_WAITING_FOR_3DS = 'CHECKOUT_WAITING_FOR_3DS',
  CHECKOUT_3DS_ERROR = 'CHECKOUT_3DS_ERROR',
  LOGGING_IN = 'LOGGING_IN',
  LOGGED_IN = 'LOGGED_IN',
  PROCESSING = 'PROCESSING',
  SUBMITTING_SHIPPING = 'SUBMITTING_SHIPPING',
  SUBMITTING_PAYMENT = 'SUBMITTING_PAYMENT',
  SUBMITTING_CHECKOUT = 'SUBMITTING_CHECKOUT',
  ADDED_TO_CART = 'ADDED_TO_CART',
  STOPPED = 'STOPPED',
  PAUSING = 'PAUSING',
  PAUSED = 'PAUSED',
  CONTINUING = 'CONTINUING',
  CONTINUED = 'CONTINUED',
  RESTARTING = 'RESTARTING',
}

export enum Command {
  STOP = 'STOP',
  PAUSE = 'PAUSE',
  CONTINUE = 'CONTINUE',
}
