import React, {useRef, useState} from 'react';
import './styles.scss';
import {DeleteWhite} from '../../../assets/images/icons/delete';
import {EditWhite} from '../../../assets/images/icons/edit';

type Props = {
  selected: boolean;
  type: string;
  group: {
    ID: string;
    Name: string;
    Items: {ID: string}[]
  };
  onSelectGroup: () => void;
  onDeleteGroup: () => void;
  onSaveGroup: (newName: string) => void;
};

const Group: React.FC<Props> = ({ selected, type, onDeleteGroup, onSelectGroup, onSaveGroup, group  }) => {
  const [editing, setEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.Name);
  const inputRef = useRef(null);

  const editGroup = () => {
    setEditing(true);
    inputRef.current.focus();
  };
  const selectGroup = () => onSelectGroup();
  const deleteGroup = () => onDeleteGroup();
  const saveGroup = () => onSaveGroup(groupName);

  return (
    <div
      className={`group${selected ? ' active' : ''}`}
      onClick={selectGroup}
      key={group.ID}>
      <input
        className={`edit ${editing ? 'active' : ''}`}
        type={'text'}
        value={groupName}
        onChange={e => setGroupName(e.target.value)}
        disabled={!editing}
        ref={inputRef}
      />
      <div className="meta">
        <span>{ group.Items.length } { type }{ group.Items.length !== 1 ? 's' : '' }</span>
        <div className="actions">
          <button
            onClick={editGroup}>
            { EditWhite }
          </button>
          <button
            onClick={deleteGroup}>
            { DeleteWhite }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Group;
