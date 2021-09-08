import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import './styles.scss';
import FloatingHeaderTable, {ActionColor} from '../../components/molecules/floating-header-table';
import EditIcon from '../../assets/images/icons/edit';
import DeleteIcon from '../../assets/images/icons/delete';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedProfileGroup} from '../../store/profiles';
import Button from '../../components/atoms/button';
import {RootState} from '../../store';
import {toast} from 'react-toastify';
import SideModal from '../../components/molecules/side-modal';
import {createProfileGroupRequest} from '../../store/profiles/reducers/create-profile-group';
import GroupTable from '../../components/organisms/group-table';
import {FetchedProfile} from '../../../../graphql/integration/handlers/profiles/get-profile';
import {
  FetchedProfileGroup,
  FetchedProfileGroupsProfile
} from '../../../../graphql/integration/handlers/profiles/get-group';
import {FetchedProfileGroupSlim} from '../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {getGroup, getGroupRequest} from '../../store/profiles/reducers/get-group';
import {Status} from '../../store/util/set-status';
import {deleteProfileGroupRequest} from '../../store/profiles/reducers/delete-profile-group';

export type Task = {
  id: string;
  product: string,
  site: string;
  size: string;
  profileGroup: string;
  proxyGroup: string;
  accountGroup: string;
  status: string;
}

type Props = {

}

const Profiles: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const selectedProfileGroup = useSelector((state: RootState) => state.profiles.selectedProfileGroup);
  const profileGroups = useSelector((state: RootState) => state.profiles.profileGroups);
  const statuses = useSelector((state: RootState) => state.profiles.statuses);

  return (
    <div className={'task-page'}>
      <GroupTable<FetchedProfileGroupsProfile, FetchedProfileGroupSlim>
        type={'Profile'}
        groups={profileGroups.map(profileGroup => ({
          ID: profileGroup.ID,
          Name: profileGroup.Name,
          Items: profileGroup.Profiles,
        }))}
        items={[]}
        selectedGroup={
          selectedProfileGroup
            ? {
              ID: selectedProfileGroup.ID,
              Name: selectedProfileGroup.Name,
              Items: selectedProfileGroup.Profiles
            }
            : null
        }
        headerItems={[]}
        createItem={() => console.log('')}
        createGroup={groupName => dispatch(createProfileGroupRequest({ Name: groupName }))}
        deleteItem={() => console.log('')}
        deleteGroup={() => dispatch(deleteProfileGroupRequest({ profileGroupId: selectedProfileGroup.ID }))}
        editItem={() => console.log('')}
        editGroup={() => console.log('')}
        getItems={() => console.log('')}
        openModal={() => console.log('')}
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
