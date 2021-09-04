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
  const [xIsScrollable, setXIsScrollable] = useState(true);
  const onOverflowChanged = (e: { xScrollable: boolean }) => setXIsScrollable(e.xScrollable);
  const [contextShown, setContextShown] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  console.log(profileGroups)

  const createGroup = async () => {
    setContextShown(false);

    if (newGroupName.trim() === "") {
      setContextShown(true);
      return toast.warn('The group name cannot be empty.');
    }

    const groupAlreadyExists = profileGroups.find(profileGroup => profileGroup.Name === newGroupName.trim());
    if (groupAlreadyExists) {
      setContextShown(true);
      return toast.warn(`A group with the name ${newGroupName.trim()} already exists.`);
    }

    setNewGroupName('');
    dispatch(createProfileGroupRequest({ Name: newGroupName.trim() }));
  };

  return (
    <div className={'task-page'}>
      <div className={'task-groups'}>
        <div className="top">
          <Button white onClick={() => setIsOpen(true)}>Create Profile</Button>
        </div>
        <div className="groups">
          {(profileGroups || []).map(profileGroup => (
            <div
              className={`task-group${selectedProfileGroup.ID === profileGroup.ID ? ' active' : ''}`}
              onClick={() => dispatch(setSelectedProfileGroup(profileGroup))}
              key={profileGroup.ID}>
              <h3>{profileGroup.Name}</h3>
              <div className="meta">
                <span>12 Profiles</span>
                <div className="actions">

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className={`context${contextShown ? ' shown' : ''}`}>
            <input
              type="text"
              placeholder={"New Profile Group"}
              value={newGroupName}
              onChange={e => setNewGroupName(e.target.value)}
            />
            <div className="buttons">
              <Button secondary onClick={() => {
                setContextShown(false);
                setTimeout(() => {
                  setNewGroupName('');
                }, 200);
              }}>Cancel</Button>
              <Button onClick={createGroup}>Save</Button>
            </div>
          </div>
          <Button white onClick={() => setContextShown(true)}>Create Profile Group</Button>
        </div>
      </div>
      <SideModal isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
          <h3>Hello</h3>
      </SideModal>
      <OverlayScrollbarsComponent
        style={{ height: 'calc(100vh - 108px)', width: 'calc(100vw - 475px)' }}
        options={{ scrollbars: { autoHide: 'never'}, callbacks: { onOverflowChanged } }}
      >
        <div className={`task-table${xIsScrollable ? ' x-can-scroll' : ''}`}>
          <FloatingHeaderTable
            columns={[
              { Header: 'Name', accessor: 'name' },
              { Header: 'Email', accessor: 'email' },
              { Header: 'First Name', accessor: 'firstName' },
              { Header: 'ZIP', accessor: 'zip' },
              { Header: 'Card', accessor: 'card' },
            ]}
            data={[]}
            actions={[
              {
                onClick: async () => {
                  console.log('login invoked')
                },
                icon: EditIcon
              },
              {
                onClick: () => console.log('click'),
                icon: DeleteIcon,
                color: ActionColor.RED
              },
            ]} />
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default Profiles;
