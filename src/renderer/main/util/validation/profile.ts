import * as yup from 'yup';
import {phoneNumber} from './regex/phone-number';
import {stateCode} from './regex/state-code';
import {countryCode} from './regex/country-code';
import cardValidator from 'card-validator';

const newAddressSchema = yup.object().shape({
  AddressLine: yup.string().required().label('Address Line'),
  AddressLine2: yup.string().notRequired(),
  Country: yup.string().matches(countryCode, 'Country is invalid').required(),
  State: yup.string().required().label('State'),
  StateCode: yup.string().matches(stateCode, 'State is invalid').notRequired(),
  City: yup.string().required().label('City'),
  ZIP: yup.string().required().label('State'),
});

export const newProfileSchema = (billingIsShipping: boolean) => yup.object().shape({
  Name: yup.string().required().label('Profile Name'),
  Email: yup.string().email().required(),
  Shipping: yup.object().shape({
    FirstName: yup.string().required().label('First Name'),
    LastName: yup.string().required().label('Last Name'),
    PhoneNumber: yup.string().matches(phoneNumber, 'Phone number is invalid'),
    BillingIsShipping: yup.boolean().required(),
    ShippingAddress: newAddressSchema.required(),
    BillingAddress: !billingIsShipping ? newAddressSchema.required() : undefined
  }).required(),
  Billing: yup.object().shape({
    CardHolderName: yup.string().required().label('Card Holder Name'),
    CardNumber: yup.string().test('test-card', 'Card Number is invalid', val => cardValidator.number(val).isValid).required(),
    ExpiryMonth: yup.string().equals(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']).required().label('Card Expiration Month'),
    ExpiryYear: yup.string().required().label('Card Expiration Year'),
    CVV: yup.string().required().label('CVV'),
  }).required()
});

export const createProfileGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});

export const updateProfileGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});

