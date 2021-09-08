import React, {LegacyRef, useRef, useState} from 'react';
import './styles.scss';
import Button from '../../atoms/button';
import FloatingHeaderTable, {Action} from '../../molecules/floating-header-table';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import {Status} from '../../../store/util/set-status';
import {toast} from 'react-toastify';
import AreYouSure from '../../molecules/dialogues/are-you-sure';
import {DeleteWhite} from '../../../assets/images/icons/delete';

type Props<Item, GroupItem> = {
  type: string;
  groups: Group[];
  items: Item[];
  profileGroupFetching: Status;
  profileGroupCreation: Status;
  profileGroupDeletion: Status;
  profileGroupUpdating: Status;
  selectedGroup: Group | null;
  headerItems: { Header: string, accessor: string }[];
  createItem: () => unknown;
  createGroup: (name: string) => unknown;
  deleteItem: () => unknown;
  deleteGroup: () => unknown;
  editItem: () => unknown;
  editGroup: () => unknown;
  getItems: () => unknown;
  openModal: () => unknown;
  setSelectedGroup: (group: Group) => unknown;
  actions: Action[];
}

type Group = {
  ID: string;
  Name: string;
  Items: { ID: string; }[];
}

function GroupTable <Item, GroupItem>({ type, createGroup, openModal, headerItems, actions, selectedGroup, groups, setSelectedGroup , profileGroupFetching, deleteGroup }: Props<Item, GroupItem>): JSX.Element {
  const [xIsScrollable, setXIsScrollable] = useState(true);
  const [contextShown, setContextShown] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const contextInputRef: LegacyRef<HTMLInputElement> = useRef(null);
  const onOverflowChanged = (e: { xScrollable: boolean }) => setXIsScrollable(e.xScrollable);

  const handleCancel = () => {
    setContextShown(false);
    setTimeout(() => {
      setNewGroupName('');
    }, 200);
  };

  const handleGroupCreation = () => {
    const groupName = newGroupName.trim();

    if (groupName.trim() === "") {
      return toast.warn('The group name cannot be empty.');
    }

    const groupAlreadyExists = groups.find(group => group.Name === groupName);
    if (groupAlreadyExists) {
      return toast.warn(`A group with the name ${groupName} already exists.`);
    }

    createGroup(groupName);

    setContextShown(false);
    setTimeout(() => {
      setNewGroupName('');
    }, 200);
  };

  const handleShowContext = () => {
    if (contextInputRef && contextInputRef.current) {
      setContextShown(true);
      setTimeout(() => {
        contextInputRef.current.focus();
      }, 200);
    }
  };

  const handleSetSelectedGroup = (group: Group) => {
    if (selectedGroup && group.ID === selectedGroup.ID) return;
    setSelectedGroup(group);
  }

  return (
    <>
      <div className={'groups'}>
        <div className="top">
          <Button white onClick={openModal}>Create { type }</Button>
        </div>
        <div className="group-list">
          {groups.map(group => (
            <div
              className={`group${selectedGroup && selectedGroup.ID === group.ID ? ' active' : ''}`}
              onClick={() => handleSetSelectedGroup(group)}
              key={group.ID}>
              <h3>{group.Name}</h3>
              <div className="meta">
                <span>{ group.Items.length } { type }s</span>
                <div className="actions">
                  <button
                    onClick={() =>
                      toast.warn(
                        <AreYouSure yesCallback={deleteGroup} doThis={'delete this group'} />
                      )
                    }>
                    { DeleteWhite }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className={`context${contextShown ? ' shown' : ''}`}>
            <input
              type="text"
              placeholder={`New ${ type } Group`}
              value={newGroupName}
              ref={contextInputRef}
              onChange={e => setNewGroupName(e.target.value)}
            />
            <div className="buttons">
              <Button secondary onClick={handleCancel}>Cancel</Button>
              <Button onClick={handleGroupCreation}>Save</Button>
            </div>
          </div>
          <Button white onClick={handleShowContext}>Create { type } Group</Button>
        </div>
      </div>
      <OverlayScrollbarsComponent
        style={{ height: 'calc(100vh - 108px)', width: 'calc(100vw - 475px)' }}
        options={{ scrollbars: { autoHide: 'never'}, callbacks: { onOverflowChanged } }}>
        <div className={`item-table${xIsScrollable ? ' x-can-scroll' : ''}`}>
          {selectedGroup
            ? (
              <FloatingHeaderTable
                loadingContent={profileGroupFetching === Status.PENDING}
                columns={headerItems}
                data={[]}
                actions={actions} />
            )
            : <div>
              <h3>{groups.length === 0 ? 'No groups have been created yet.' : 'No group selected.' }</h3>
            </div>
          }
        </div>
      </OverlayScrollbarsComponent>
    </>
  );
}

export default GroupTable;
