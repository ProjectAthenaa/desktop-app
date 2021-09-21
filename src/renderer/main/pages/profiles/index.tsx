import React, {useEffect, useState} from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import SideModal from '../../components/molecules/side-modal';
import {createProfileGroupRequest} from '../../store/profiles/reducers/create-profile-group';
import GroupTable from '../../components/organisms/group-table';
import {FetchedProfileGroupsProfile} from '../../../../graphql/integration/handlers/profiles/get-group';
import {getGroupRequest} from '../../store/profiles/reducers/get-group';
import {deleteProfileGroupRequest} from '../../store/profiles/reducers/delete-profile-group';
import {createProfileRequest} from '../../store/profiles/reducers/create-profile';
import {Address, ProfileCreation} from '../../../../types/profile';
import {toast} from 'react-toastify';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import {ActionColor} from '../../components/molecules/floating-header-table';
import Edit from '../../assets/images/icons/edit';
import Delete from '../../assets/images/icons/delete';
import {updateProfileGroupRequest} from '../../store/profiles/reducers/update-profile-group';
import {deleteProfileRequest} from '../../store/profiles/reducers/delete-profile';
import ProfileForm from './profile-form';
import {updateProfileRequest} from '../../store/profiles/reducers/update-profile';
import {getProfileRequest} from '../../store/profiles/reducers/get-profile';
import SideModalHeader from '../../components/molecules/side-modal-header';
import SideModalBody from '../../components/molecules/side-modal-body';
import SideModalFooter from '../../components/molecules/side-modal-footer';
import Button from '../../components/atoms/button';
import {newProfileSchema, updateProfileSchema} from '../../util/validation/profile';
import AreYouSure from '../../components/molecules/dialogues/are-you-sure';
import ipcRenderer from '../../util/ipc-renderer';
import {ModuleInformation} from '../../../../types/modules';
import enumFormatter from '../../util/status-formatter';

const Profiles: React.FC = () => {
  const dispatch = useDispatch();
  const [shown, setShown] = useState(false);
  const selectedProfileGroup = useSelector((state: RootState) => state.profiles.selectedProfileGroup);
  const selectedProfile = useSelector((state: RootState) => state.profiles.selectedProfile);
  const profileGroups = useSelector((state: RootState) => state.profiles.profileGroups);
  const statuses = useSelector((state: RootState) => state.profiles.statuses);
  const profileFormMethods = useForm<ProfileCreation>();
  const [modalShown, setModalShown] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  const [updateBilling, setUpdatingBilling] = useState(false);

  const handleSubmission: SubmitHandler<ProfileCreation> = async data =>
     !editingProfile
      ? createProfile(data)
      : updateProfile(data);

  const updateProfile: SubmitHandler<ProfileCreation> = async data => {
    try {
      await updateProfileSchema(data.Shipping.BillingIsShipping, updateBilling).validate(data);
    } catch (error) {
      return toast.error(
        error.errors[0],
        {
          position: 'bottom-left'
        }
      );
    }

    if (!selectedProfileGroup) return toast.error('You haven\'t selected a profile group.');
    if (!selectedProfile) return toast.error('You haven\'t selected profile.');

    dispatch(updateProfileRequest({
      ...data,
      ID: selectedProfile.ID,
      GroupID: selectedProfileGroup.ID,
      Shipping: {
        ...data.Shipping,
        BillingAddress: !data.Shipping.BillingIsShipping ? data.Shipping.BillingAddress : undefined
      },
      Billing: updateBilling ? data.Billing : undefined,
    }));

    closeAndResetModal();
  };

  const launchEditor = (id: string) => {
    setEditingProfile(true);
    dispatch(getProfileRequest(id));
  };

  const createProfile: SubmitHandler<ProfileCreation> = async data => {
    try {
      await newProfileSchema(data.Shipping.BillingIsShipping).validate(data);
    } catch (error) {
      return toast.error(
        error.errors[0],
        {
          position: 'bottom-left'
        }
      );
    }

    if (!selectedProfileGroup) return toast.error('You haven\'t selected a profile group');

    dispatch(createProfileRequest({
      ...data,
      GroupID: selectedProfileGroup.ID
    }));

    closeAndResetModal();
  };

  const deleteProfile = (id?: string) => {
    if (id) return dispatch(deleteProfileRequest({profileId: id}))

    selectedProfileGroup.Profiles.forEach(profile => dispatch(deleteProfileRequest({profileId: profile.ID})))
  };

  const editProfileGroup = (newName: string) => {
    dispatch(updateProfileGroupRequest({
      profileGroupId: selectedProfileGroup.ID,
      Name: newName,
    }));
  };

  const confirmClose = () => {
    toast.warn(<AreYouSure yesCallback={closeAndResetModal} doThis={'close this form without saving'} />, {
      toastId: 'profile-creation-close-confirm'
    });
  };

  const closeAndResetModal = () => {
    if (profileFormMethods.getValues())
    if (editingProfile) setEditingProfile(false);

    setModalShown(false);
    setShown(false);
    profileFormMethods.reset();
  };

  const loadEditForm = async () => {
    profileFormMethods.setValue('Name', selectedProfile.Name)
    profileFormMethods.setValue('Email', selectedProfile.Email)
    profileFormMethods.setValue('Shipping.FirstName', selectedProfile.Shipping.FirstName)
    profileFormMethods.setValue('Shipping.LastName', selectedProfile.Shipping.LastName)
    profileFormMethods.setValue('Shipping.PhoneNumber', selectedProfile.Shipping.PhoneNumber)
    profileFormMethods.setValue('Shipping.BillingIsShipping', selectedProfile.Shipping.BillingIsShipping)
    setShown(selectedProfile.Shipping.BillingIsShipping);
    if (!selectedProfile.Shipping.BillingIsShipping) {
      profileFormMethods.setValue('Shipping.BillingAddress.AddressLine', selectedProfile.Shipping.BillingAddress.AddressLine)
      profileFormMethods.setValue('Shipping.BillingAddress.AddressLine2', selectedProfile.Shipping.BillingAddress.AddressLine2)
      profileFormMethods.setValue('Shipping.BillingAddress.Country', selectedProfile.Shipping.BillingAddress.Country)
      profileFormMethods.setValue('Shipping.BillingAddress.State', selectedProfile.Shipping.BillingAddress.State)
      profileFormMethods.setValue('Shipping.BillingAddress.City', selectedProfile.Shipping.BillingAddress.City)
      profileFormMethods.setValue('Shipping.BillingAddress.ZIP', selectedProfile.Shipping.BillingAddress.ZIP)
      profileFormMethods.setValue('Shipping.BillingAddress.StateCode', selectedProfile.Shipping.BillingAddress.StateCode)
    }
    profileFormMethods.setValue('Shipping.ShippingAddress.AddressLine', selectedProfile.Shipping.ShippingAddress.AddressLine)
    profileFormMethods.setValue('Shipping.ShippingAddress.AddressLine2', selectedProfile.Shipping.ShippingAddress.AddressLine2)
    profileFormMethods.setValue('Shipping.ShippingAddress.Country', selectedProfile.Shipping.ShippingAddress.Country)
    profileFormMethods.setValue('Shipping.ShippingAddress.State', selectedProfile.Shipping.ShippingAddress.State)
    profileFormMethods.setValue('Shipping.ShippingAddress.City', selectedProfile.Shipping.ShippingAddress.City)
    profileFormMethods.setValue('Shipping.ShippingAddress.ZIP', selectedProfile.Shipping.ShippingAddress.ZIP)
    profileFormMethods.setValue('Shipping.ShippingAddress.StateCode', selectedProfile.Shipping.ShippingAddress.StateCode)

    setModalShown(true);
  }

  useEffect(() => {
    if (editingProfile && !modalShown) {
      loadEditForm()
    }
  }, [selectedProfile]);

  return (
    <div className={'task-page'}>
      <FormProvider {...profileFormMethods}>
        <SideModal isOpen={modalShown} onCloseClick={confirmClose}>
          <SideModalHeader>Profile Creation</SideModalHeader>
            <form onSubmit={profileFormMethods.handleSubmit(handleSubmission)}>
            <SideModalBody>
                {editingProfile
                  ? selectedProfile
                    ? <ProfileForm
                      shown={shown}
                      setShown={setShown}
                      setUpdateBilling={setUpdatingBilling}
                      updateBilling={updateBilling}
                      editing
                    />
                    : <></>
                  : (
                    <ProfileForm
                      shown={shown}
                      setShown={setShown}
                    />
                  )
                }
            </SideModalBody>
            <SideModalFooter>
              <Button type={'submit'}>{editingProfile ? 'Update' : 'Create'} Profile</Button>
            </SideModalFooter>
          </form>
        </SideModal>
      </FormProvider>
      <GroupTable<FetchedProfileGroupsProfile>
        type={'Profile'}
        groups={profileGroups.map(profileGroup => ({
          ID: profileGroup.ID,
          Name: profileGroup.Name,
          Items: profileGroup.Profiles,
        }))}
        items={selectedProfileGroup ? selectedProfileGroup.Profiles : []}
        selectedGroup={selectedProfileGroup ? {
          ID: selectedProfileGroup.ID,
          Name: selectedProfileGroup.Name,
          Items: selectedProfileGroup.Profiles
        } : null}
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
        createGroup={groupName => dispatch(createProfileGroupRequest({ Name: groupName }))}
        deleteGroup={() => dispatch(deleteProfileGroupRequest({ profileGroupId: selectedProfileGroup.ID }))}
        saveGroup={editProfileGroup}
        openModal={() => setModalShown(true)}
        setSelectedGroup={group => dispatch(getGroupRequest(group.ID))}
        groupFetching={statuses.profileGroupFetching}
        groupCreation={statuses.profileGroupCreation}
        groupDeletion={statuses.profileGroupDeletion}
        groupUpdating={statuses.profileGroupUpdating}
        actions={[
          {
            onClick: launchEditor,
            icon: Edit,
            hideHead: true,
          },
          {
            onClick: deleteProfile,
            icon: Delete,
            color: ActionColor.RED,
            // hideHead: true,
          }
        ]}
      />
    </div>
  );
};

export default Profiles;
