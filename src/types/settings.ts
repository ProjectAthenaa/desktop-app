export interface Settings {
  SuccessWebhook: string;
  DeclineWebhook: string;
  CheckoutDelay: number;
  ATCDelay: number;
}

export enum DelayType {
  CHECKOUT,
  ATC
}

export enum WebhookType {
  SUCCESS,
  DECLINE
}
