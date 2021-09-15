import React, {useState} from 'react';
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
import {ProfileCreation} from '../../../../types/profile';
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

const Profiles: React.FC = () => {
  const dispatch = useDispatch();
  const selectedProfileGroup = useSelector((state: RootState) => state.profiles.selectedProfileGroup);
  const selectedProfile = useSelector((state: RootState) => state.profiles.selectedProfile);
  const profileGroups = useSelector((state: RootState) => state.profiles.profileGroups);
  const statuses = useSelector((state: RootState) => state.profiles.statuses);
  const profileFormMethods = useForm<ProfileCreation>();
  const [modalShown, setModalShown] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);

  const handleSubmission: SubmitHandler<ProfileCreation> = data =>
    !editingProfile
      ? createProfile(data)
      : updateProfile(data);

  const updateProfile: SubmitHandler<ProfileCreation> = data => {
    if (!selectedProfileGroup) return toast.error('You haven\'t selected a profile group.');
    if (selectedProfile) return toast.error('You haven\'t selected profile.');

    // Insert validation here

    dispatch(updateProfileRequest({
      ...data,
      ID: selectedProfile.ID,
    }));
  };

  const launchEditor = (id: string) => {
    setEditingProfile(true);
    dispatch(getProfileRequest(id));
  };

  const createProfile: SubmitHandler<ProfileCreation> = data => {
    if (!selectedProfileGroup) return toast.error('You haven\'t selected a profile group');

    // Insert validation here

    dispatch(createProfileRequest({
      ...data,
      GroupID: selectedProfileGroup.ID
    }));
  };

  const deleteProfile = (id: string) => dispatch(deleteProfileRequest({ profileId: id }));

  const editProfileGroup = (newName: string) => {
    dispatch(updateProfileGroupRequest({
      profileGroupId: selectedProfileGroup.ID,
      Name: newName,
    }));
  };

  const closeAndResetModal = () => {
    if (editingProfile) setEditingProfile(false);

    setModalShown(false);

    // Reset form
  };

  return (
    <div className={'task-page'}>
      <FormProvider {...profileFormMethods}>
        <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
          <SideModalHeader>Task Creation</SideModalHeader>
          <SideModalBody>
            <form onSubmit={profileFormMethods.handleSubmit(handleSubmission)}>
              {
                editingProfile
                  ? selectedProfile ? <ProfileForm /> : <></>
                  : <ProfileForm />
              }
            </form>
          </SideModalBody>
          <SideModalFooter>
            <Button type={'submit'}>Create Profile</Button>
          </SideModalFooter>
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
            icon: Edit
          },
          {
            onClick: deleteProfile,
            icon: Delete,
            color: ActionColor.RED
          }
        ]}
      />
    </div>
  );
};

export default Profiles;
