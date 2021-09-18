

export interface Shipping {
  ID: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  BillingIsShipping: boolean;
  ShippingAddress: Address;
  BillingAddress: Address;
}

export interface Address {
  ID: string;
  AddressLine: string;
  AddressLine2: string;
  Country: string;
  State: string;
  City: string;
  ZIP: string;
  StateCode: string;
}

export interface Billing {
  ID: string;
  CardHolderName: string;
  CardNumber: string;
  ExpiryMonth: string;
  ExpiryYear: string;
  CVV: string;
}

export interface Profile {
  ID: string;
  Name: string;
  Email: string;
  Shipping: Shipping;
}


export interface ProfileGroupCreation {
  Name: string;
}
export interface ProfileGroup {
  ID: string;
  Name: string;
  Profiles: Profile[];
}

export interface NewAddress {
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  BillingIsShipping: boolean;
  ShippingAddress?: Address;
  BillingAddress: Address;
}
//
export interface NewBilling {
  CardHolderName: string;
  CardNumber: string;
  ExpiryMonth: string;
  ExpiryYear: string;
  CVV: string;
}

export interface ProfileCreation {
  GroupID: string;
  Name: string;
  Email: string;
  Shipping: NewAddress;
  Billing: NewBilling;
}
