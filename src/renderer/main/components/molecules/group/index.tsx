import React, {useRef, useState} from 'react';
import './styles.scss';
import {DeleteWhite} from '../../../assets/images/icons/delete';
import {EditWhite} from '../../../assets/images/icons/edit';
import Save from '../../../assets/images/icons/save';
import Close from '../../../assets/images/icons/close';

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
    setTimeout(() => inputRef.current.focus(), 10);
  };
  const cancelEdit = () => {
    setEditing(false);
    setGroupName(group.Name);
  };
  const selectGroup = () => onSelectGroup();
  const deleteGroup = () => onDeleteGroup();
  const saveGroup = () => {
    setEditing(false);
    onSaveGroup(groupName)
  };

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
        <span>{ group.Items.length } { type }</span>
        <div className={`actions ${editing ? 'editing' : ''}`}>
          <div className="main-actions">
            <button onClick={editGroup}>
              { EditWhite }
            </button>
            <button onClick={deleteGroup}>
              { DeleteWhite }
            </button>
          </div>
          <div className="sub-actions">
            <button onClick={saveGroup}>
              { Save }
            </button>
            <button onClick={cancelEdit}>
              { Close }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
