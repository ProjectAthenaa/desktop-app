import React, {useState} from 'react';
import Label from '../../components/atoms/label';
import Button from '../../components/atoms/button';
import {useFormContext} from 'react-hook-form';
import {ProfileCreation} from '../../../../types/profile';
import Input from '../../components/atoms/input';
import FormItem from '../../components/atoms/form-item';

type Props = {
  shown: boolean;
  setShown: (to: boolean) => void;
  editing?: boolean;
  updateBilling?: boolean;
  setUpdateBilling?: (e: boolean) => void;
}

const ProfileForm: React.FC<Props> = ({ shown, setShown, editing, updateBilling, setUpdateBilling }) => {
  const {register} = useFormContext<ProfileCreation>();

  return (
    <>
      <FormItem>
        <Label htmlFor={'Name'}>Profile Name</Label>
        <Input type={'text'} {...register('Name')} id={'Name'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Email'}>Email</Label>
        <Input type={'text'} {...register('Email')} id={'Email'}/>
      </FormItem>
      <hr/>
      <FormItem>
        <Label htmlFor={'Shipping.FirstName'}>First Name</Label>
        <Input type={'text'} {...register('Shipping.FirstName')} id={'Shipping.FirstName'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.LastName'}>Last Name</Label>
        <Input type={'text'} {...register('Shipping.LastName')} id={'Shipping.LastName'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.PhoneNumber'}>Phone Number</Label>
        <Input type={'text'} {...register('Shipping.PhoneNumber')} id={'Shipping.PhoneNumber'}/>
      </FormItem>
      <hr/>

      <h3>Shipping Address</h3>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.AddressLine'}>Address Line</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.AddressLine')}
               id={'Shipping.ShippingAddress.AddressLine'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.AddressLine2'}>Address Line 2</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.AddressLine2')}
               id={'Shipping.ShippingAddress.AddressLine2'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.City'}>City</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.City')} id={'Shipping.ShippingAddress.City'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.State'}>State</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.State')} id={'Shipping.ShippingAddress.State'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.StateCode'}>State Code</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.StateCode')}
               id={'Shipping.ShippingAddress.StateCode'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.ZIP'}>Zip Code</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.ZIP')} id={'Shipping.ShippingAddress.ZIP'}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'Shipping.ShippingAddress.Country'}>Country</Label>
        <Input type={'text'} {...register('Shipping.ShippingAddress.Country')} id={'Shipping.ShippingAddress.Country'}/>
      </FormItem>
      <hr/>


      <h3>Billing Address</h3>
      <FormItem>
        <Label htmlFor={'Shipping.BillingIsShipping'}>
          <input type={'checkbox'} {...register('Shipping.BillingIsShipping')} id={'Shipping.BillingIsShipping'}
                 onChange={e => setShown(e.target.checked)}/>{" "}
          Billing same as Shipping
        </Label>
      </FormItem>

      {!shown && (
        <>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.AddressLine'}>Address Line</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.AddressLine')}
                   id={'Shipping.BillingAddress.AddressLine'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.AddressLine2'}>Address Line 2</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.AddressLine2')}
                   id={'Shipping.BillingAddress.AddressLine2'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.City'}>City</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.City')} id={'Shipping.BillingAddress.City'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.State'}>State</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.State')} id={'Shipping.BillingAddress.State'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.StateCode'}>State Code</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.StateCode')}
                   id={'Shipping.BillingAddress.StateCode'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.ZIP'}>Zip Code</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.ZIP')} id={'Shipping.BillingAddress.ZIP'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Shipping.BillingAddress.Country'}>Country</Label>
            <Input type={'text'} {...register('Shipping.BillingAddress.Country')}
                   id={'Shipping.BillingAddress.Country'}/>
          </FormItem>
        </>
      )}
      <hr/>

      <h3>Billing Information</h3>
      {editing && (
        <FormItem>
          <Label htmlFor={'update-card'}>
            <input type={'checkbox'} onChange={e => setUpdateBilling(e.target.checked)} id={'update-card'}/>{" "}
            Update Card Information
          </Label>
        </FormItem>
      )}
      {(!editing || updateBilling) && (
        <>
          <FormItem>
            <Label htmlFor={'Billing.CardHolderName'}>Name</Label>
            <Input type={'text'} {...register('Billing.CardHolderName')} id={'Billing.CardHolderName'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Billing.CardNumber'}>Card Number</Label>
            <Input type={'text'} {...register('Billing.CardNumber')} id={'Billing.CardNumber'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Billing.ExpiryMonth'}>Exp. Month</Label>
            <Input type={'text'} {...register('Billing.ExpiryMonth')} id={'Billing.ExpiryMonth'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Billing.ExpiryYear'}>Exp. Year</Label>
            <Input type={'text'} {...register('Billing.ExpiryYear')} id={'Billing.ExpiryYear'}/>
          </FormItem>
          <FormItem>
            <Label htmlFor={'Billing.CVV'}>CVV</Label>
            <Input type={'text'} {...register('Billing.CVV')} id={'Billing.CVV'}/>
          </FormItem>
        </>
      )}
    </>
  );
};

export default ProfileForm;
