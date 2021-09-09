import React, {useState} from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/atoms/button';
import {RootState} from '../../store';
import SideModal from '../../components/molecules/side-modal';
import {createProfileGroupRequest} from '../../store/profiles/reducers/create-profile-group';
import GroupTable from '../../components/organisms/group-table';
import {FetchedProfileGroupsProfile} from '../../../../graphql/integration/handlers/profiles/get-group';
import {FetchedProfileGroupSlim} from '../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {getGroupRequest} from '../../store/profiles/reducers/get-group';
import {deleteProfileGroupRequest} from '../../store/profiles/reducers/delete-profile-group';
import {createProfileRequest} from '../../store/profiles/reducers/create-profile';
import {Address, NewAddress, NewBilling, ProfileCreation} from '../../../../types/profile';
import {toast} from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import Label from '../../components/atoms/label';

const Profiles: React.FC = () => {
  const dispatch = useDispatch();
  const selectedProfileGroup = useSelector((state: RootState) => state.profiles.selectedProfileGroup);
  const profileGroups = useSelector((state: RootState) => state.profiles.profileGroups);
  const statuses = useSelector((state: RootState) => state.profiles.statuses);
  const { register, handleSubmit } = useForm<ProfileCreation>();
  const [modalShown, setModalShown] = useState(false);

  const createProfile: SubmitHandler<ProfileCreation> = data => {
    if (!selectedProfileGroup) return toast.error('You haven\'t selected a profile group');

    // Insert validation here

    dispatch(createProfileRequest({
      ...data,
      GroupID: selectedProfileGroup.ID,
      Shipping: {
        ...data.Shipping,
        BillingIsShipping: true, // change later
      }
    }));
  };

  const closeAndResetModal = () => {
    setModalShown(false);

    // Reset form
  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <form onSubmit={handleSubmit(createProfile)}>
          <Label htmlFor={'Name'}>Profile Name</Label>
          <input type={'text'} {...register('Name')} id={'Name'} />

          <Label htmlFor={'Email'}>Email</Label>
          <input type={'text'} {...register('Email')} id={'Email'} />

          <hr/>
          <Label htmlFor={'Shipping.FirstName'}>First Name</Label>
          <input type={'text'} {...register('Shipping.FirstName')} id={'Shipping.FirstName'} />

          <Label htmlFor={'Shipping.LastName'}>Last Name</Label>
          <input type={'text'} {...register('Shipping.LastName')} id={'Shipping.LastName'} />

          <Label htmlFor={'Shipping.PhoneNumber'}>Phone Number</Label>
          <input type={'text'} {...register('Shipping.PhoneNumber')} id={'Shipping.PhoneNumber'} />
          <hr/>

          <h3>Shipping Address</h3>
          <Label htmlFor={'Shipping.ShippingAddress.AddressLine'}>Address Line</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.AddressLine')} id={'Shipping.ShippingAddress.AddressLine'} />

          <Label htmlFor={'Shipping.ShippingAddress.AddressLine2'}>Address Line 2</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.AddressLine2')} id={'Shipping.ShippingAddress.AddressLine2'} />

          <Label htmlFor={'Shipping.ShippingAddress.City'}>City</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.City')} id={'Shipping.ShippingAddress.City'} />

          <Label htmlFor={'Shipping.ShippingAddress.State'}>State</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.State')} id={'Shipping.ShippingAddress.State'} />

          <Label htmlFor={'Shipping.ShippingAddress.StateCode'}>State Code</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.StateCode')} id={'Shipping.ShippingAddress.StateCode'} />

          <Label htmlFor={'Shipping.ShippingAddress.ZIP'}>Zip Code</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.ZIP')} id={'Shipping.ShippingAddress.ZIP'} />

          <Label htmlFor={'Shipping.ShippingAddress.Country'}>Country</Label>
          <input type={'text'} {...register('Shipping.ShippingAddress.Country')} id={'Shipping.ShippingAddress.Country'} />
          <hr/>

          <h3>Billing Address</h3>
          <Label htmlFor={'Shipping.BillingAddress.AddressLine'}>Address Line</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.AddressLine')} id={'Shipping.BillingAddress.AddressLine'} />

          <Label htmlFor={'Shipping.BillingAddress.AddressLine2'}>Address Line 2</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.AddressLine2')} id={'Shipping.BillingAddress.AddressLine2'} />

          <Label htmlFor={'Shipping.BillingAddress.City'}>City</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.City')} id={'Shipping.BillingAddress.City'} />

          <Label htmlFor={'Shipping.BillingAddress.State'}>State</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.State')} id={'Shipping.BillingAddress.State'} />

          <Label htmlFor={'Shipping.BillingAddress.StateCode'}>State Code</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.StateCode')} id={'Shipping.BillingAddress.StateCode'} />

          <Label htmlFor={'Shipping.BillingAddress.ZIP'}>Zip Code</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.ZIP')} id={'Shipping.BillingAddress.ZIP'} />

          <Label htmlFor={'Shipping.BillingAddress.Country'}>Country</Label>
          <input type={'text'} {...register('Shipping.BillingAddress.Country')} id={'Shipping.BillingAddress.Country'} />
          <hr/>

          <h3>Billing Information</h3>
          <Label htmlFor={'Billing.CardHolderName'}>Name</Label>
          <input type={'text'} {...register('Billing.CardHolderName')} id={'Billing.CardHolderName'} />

          <Label htmlFor={'Billing.CardNumber'}>Card Number</Label>
          <input type={'text'} {...register('Billing.CardNumber')} id={'Billing.CardNumber'} />

          <Label htmlFor={'Billing.ExpiryMonth'}>Exp. Month</Label>
          <input type={'text'} {...register('Billing.ExpiryMonth')} id={'Billing.ExpiryMonth'} />

          <Label htmlFor={'Billing.ExpiryYear'}>Exp. Year</Label>
          <input type={'text'} {...register('Billing.ExpiryYear')} id={'Billing.ExpiryYear'} />

          <Label htmlFor={'Billing.CVV'}>CVV</Label>
          <input type={'text'} {...register('Billing.CVV')} id={'Billing.CVV'} />

          <Button type={'submit'}>Create Profile</Button>
        </form>
      </SideModal>
      <GroupTable<FetchedProfileGroupsProfile, FetchedProfileGroupSlim>
        type={'Profile'}
        groups={profileGroups.map(profileGroup => ({
          ID: profileGroup.ID,
          Name: profileGroup.Name,
          Items: profileGroup.Profiles,
        }))}
        items={selectedProfileGroup.Profiles}
        // items={[]}
        selectedGroup={
          selectedProfileGroup
            ? {
              ID: selectedProfileGroup.ID,
              Name: selectedProfileGroup.Name,
              Items: selectedProfileGroup.Profiles
            }
            : null
        }
        headerItems={[
          {
            Header: 'Profile Name',
            accessor: 'Name',
          },
          {
            Header: 'Email',
            accessor: 'Email',
          },
          {
            Header: 'First Name',
            accessor: 'Shipping.FirstName',
          },
          {
            Header: 'Last Name',
            accessor: 'Shipping.LastName',
          },
          {
            Header: 'Address',
            accessor: 'Shipping.ShippingAddress.AddressLine',
          },
        ]}
        createItem={() => console.log('')}
        createGroup={groupName => dispatch(createProfileGroupRequest({ Name: groupName }))}
        deleteItem={() => console.log('')}
        deleteGroup={() => dispatch(deleteProfileGroupRequest({ profileGroupId: selectedProfileGroup.ID }))}
        editItem={() => console.log('')}
        editGroup={() => console.log('')}
        getItems={() => console.log('')}
        openModal={() => setModalShown(true)}
        setSelectedGroup={group => dispatch(getGroupRequest(group.ID))}
        profileGroupFetching={statuses.profileGroupFetching}
        profileGroupCreation={statuses.profileGroupCreation}
        profileGroupDeletion={statuses.profileGroupDeletion}
        profileGroupUpdating={statuses.profileGroupUpdating}
        actions={[]}
      />
    </div>
  );
};

export default Profiles;
