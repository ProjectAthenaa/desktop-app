import * as yup from 'yup';
import {phoneNumber} from './regex/phone-number';
import {stateCode} from './regex/state-code';
import {countryCode} from './regex/country-code';
import cardValidator from 'card-validator';

const newAddressSchema = yup.object().shape({
  AddressLine: yup.string().required(),
  AddressLine2: yup.string().notRequired(),
  Country: yup.string().matches(countryCode, 'Country is invalid').required(),
  State: yup.string().required(),
  StateCode: yup.string().matches(stateCode, 'State is invalid').notRequired(),
  City: yup.string().required(),
  ZIP: yup.string().required(),
});

export const newProfileSchema = yup.object().shape({
  GroupID: yup.string().uuid().required(),
  Name: yup.string().required(),
  Email: yup.string().email().required(),
  Shipping: yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    PhoneNumber: yup.string().matches(phoneNumber, 'Phone number is invalid'),
    ShippingAddress: newAddressSchema.required(),
    BillingAddress: newAddressSchema.notRequired(),
    BillingIsShipping: yup.boolean().required(),
  }).required(),
  Billing: yup.object().shape({
    CardHolderName: yup.string().required(),
    CardNumber: yup.string().test('test-card', 'Card Number is invalid', val => cardValidator.number(val).isValid).required(),
    ExpiryMonth: yup.string().equals(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']).required(),
    ExpiryYear: yup.string().required(),
    CVV: yup.string().required(),
  }).required()
});

export const createProfileGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});

export const updateProfileGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});

