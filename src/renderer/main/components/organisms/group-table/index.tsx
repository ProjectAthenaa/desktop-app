import React, {LegacyRef, useRef, useState} from 'react';
import './styles.scss';
import Button from '../../atoms/button';
import FloatingHeaderTable, {Action} from '../../molecules/floating-header-table';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import {Status} from '../../../store/util/set-status';
import {toast} from 'react-toastify';
import AreYouSure from '../../molecules/dialogues/are-you-sure';
import Group from '../../molecules/group';
import {Site} from '../../../../../types/task';
import Select from '../../atoms/select';
import {ProxyListType} from '../../../../../types/proxy';

type Props<Item> = {
  type: string;
  plural?: string;
  groups: Group[];
  items: Item[];
  groupFetching: Status;
  groupCreation: Status;
  groupDeletion: Status;
  groupUpdating: Status;
  selectedGroup: Group | null;
  headerItems: { Header: string, accessor: string }[];
  createGroup: (name: string, extra?: Site | ProxyListType) => void;
  deleteGroup: () => void;
  saveGroup: (name: string) => void;
  openModal: () => void;
  setSelectedGroup: (group: Group) => void;
  actions: Action[];
  accounts?: boolean;
  proxies?: boolean;
}

export type Group = {
  ID: string;
  Name: string;
  Items: { ID: string; }[];
}

function GroupTable <Item>({ type, createGroup, openModal, plural, items, headerItems, accounts, proxies, actions, selectedGroup, groups, setSelectedGroup, groupFetching, deleteGroup, saveGroup }: Props<Item>): JSX.Element {
  const [xIsScrollable, setXIsScrollable] = useState(true);
  const [contextShown, setContextShown] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedSite, setSelectedSite] = useState((Object.keys(Site) as Array<keyof typeof Site>)[0]);
  const [selectedType, setSelectedType] = useState((Object.keys(ProxyListType) as Array<keyof typeof ProxyListType>)[0]);
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

    if (accounts) {
      createGroup(groupName, selectedSite as Site);
    } else if (proxies) {
      createGroup(groupName, selectedType as ProxyListType);
    } else {
      createGroup(groupName);
    }

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
  };

  const handleDelete = () => {
    toast.warn(
      <AreYouSure yesCallback={deleteGroup} doThis={'delete this group'} />
    );
  };

  return (
    <>
      <div className={'groups'}>
        <div className="top">
          <Button white onClick={openModal} disabled={!selectedGroup}>{!accounts && !proxies ? 'Create' : 'Update'} { plural ? plural : `${type}${accounts ? 's' : ''}` }</Button>
        </div>
        <div className="group-list">
          {groups.map(group => (
            <Group
              type={plural ? plural : type + 's'}
              selected={selectedGroup && selectedGroup.ID === group.ID}
              group={group}
              key={group.ID}
              onDeleteGroup={handleDelete}
              onSelectGroup={() => handleSetSelectedGroup(group)}
              onSaveGroup={name => saveGroup(name)}
            />
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
            {accounts && (
              <Select
                value={selectedSite}
                className={'site'}
                onChange={e => setSelectedSite(e.target.value as never)}>
                {(Object.keys(Site) as Array<keyof typeof Site>).map(key => (
                  <option value={key} key={key}>{key.split('_').join(' ')}</option>
                ))}
              </Select>
            )}
            {proxies && (
              <Select
                value={selectedType}
                className={'site'}
                onChange={e => setSelectedType(e.target.value as never)}>
                {(Object.keys(ProxyListType) as Array<keyof typeof ProxyListType>).map(key => (
                  <option value={key} key={key}>{key}</option>
                ))}
              </Select>
            )}
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
                loadingContent={groupFetching === Status.PENDING}
                columns={headerItems}
                data={items as Record<string, unknown>[]}
                actions={actions} />
            )
            : (
              <div style={{ height: 'calc(100vh - 108px)', width: 'calc(100vw - 475px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3>{groups.length === 0 ? 'No groups have been created yet.' : 'No group selected.' }</h3>
                </div>
              </div>
            )
          }
        </div>
      </OverlayScrollbarsComponent>
    </>
  );
}

export default GroupTable;
