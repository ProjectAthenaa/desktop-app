import React, {LegacyRef, useRef, useState} from 'react';
import './styles.scss';
import Button from '../../atoms/button';
import FloatingHeaderTable, {Action} from '../../molecules/floating-header-table';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';

type Props<I, G> = {
  type: string;
  groups: G[];
  items: I[];
  selectedGroup: G;
  headerItems: { Header: string, accessor: string }[];
  createItem: () => unknown;
  createGroup: (name: string) => unknown;
  deleteItem: () => unknown;
  deleteGroup: () => unknown;
  editItem: () => unknown;
  editGroup: () => unknown;
  getItems: () => unknown;
  openModal: () => unknown;
  setSelectedGroup: (group: G) => unknown;
  actions: Action[];
}


function GroupTable <I, G extends { ID: string; Name: string; }>({ type, createGroup, openModal, headerItems, actions, selectedGroup, groups, setSelectedGroup }: Props<I, G>): JSX.Element {
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
    createGroup(newGroupName)

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

  return (
    <>
      <div className={'groups'}>
        <div className="top">
          <Button white onClick={openModal}>Create { type }</Button>
        </div>
        <div className="group-list">
          {groups.map(group => (
            <div
              className={`group${selectedGroup.ID === group.ID ? ' active' : ''}`}
              onClick={() => setSelectedGroup(group)}
              key={group.ID}>
              <h3>{group.Name}</h3>
              <div className="meta">
                <span>12 { type }s</span>
                <div className="actions">
                  {/* Edit / Delete */}
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
          <FloatingHeaderTable
            columns={headerItems}
            data={[]}
            actions={actions} />
        </div>
      </OverlayScrollbarsComponent>
    </>
  );
}

export default GroupTable;
