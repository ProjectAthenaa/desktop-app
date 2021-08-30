import React, {useEffect, useRef, useState} from 'react';
import './styles.scss';
import {Link, useLocation} from 'react-router-dom';
import Plus from '../../../assets/images/icons/plus';
import Check from '../../../assets/images/icons/check';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {createTaskGroupRequest} from '../../../store/tasks/reducers/create-task-group';
import {Status} from '../../../store/util/set-status';
import useOutsideAlerter from '../../../util/useOutsideAlerter';


const TaskGroupHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { taskGroups, statuses } = useSelector((state: RootState) => state.tasks);
  const [createGroupVisibility, setCreateGroupVisibility] = useState(true);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPlaceholderName, setNewGroupPlaceholderName] = useState('New Group');
  const {pathname} = useLocation();
  const contextMenuRef = useRef();
  const [contextMenu, setContextMenu] = useState({ shown: false, coords: [0, 0]});
  useOutsideAlerter(contextMenuRef, () => {
    setContextMenu(prev => ({ ...prev, shown: false }));
    setTimeout(() => {
      setContextMenu(prev => ({ ...prev, coords: [0, 0] }));
    }, 100)
  });

  const createGroup = async () => {
    if (newGroupName.trim() === "") return; // TODO: add a modal or toast displaying no name set or something

    dispatch(createTaskGroupRequest({ Name: newGroupName.trim() }));
  };
  const handleRightClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setContextMenu({
      shown: true,
      coords: [event.clientX, event.clientY]
    });
  };
  useEffect(() => {
    switch (statuses.taskCreation) {
      case Status.FULFILLED:
        setNewGroupName('');
        setNewGroupPlaceholderName('');
        setTimeout(() => setNewGroupPlaceholderName('New Group'), 400);
        setCreateGroupVisibility(true);
        break;
      case Status.IDLE:
      case Status.PENDING:
      case Status.REJECTED:
      default:
        break;
    }
  }, [statuses.taskCreation]);

  return (
    <div className={'task-group-header'}>
      <div className="group-list">
        <ul
          ref={contextMenuRef}
          style={{ top: contextMenu.coords[1], left: contextMenu.coords[0] }}
          className={`context-menu ${contextMenu.shown ? 'shown' : ''}`}>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button>Delete</button>
          </li>
        </ul>
        {(taskGroups || []).map(taskGroup => (
          <Link
            onContextMenu={handleRightClick}
            className={`group ${`/tasks/${taskGroup.ID}` === pathname ? 'active' : ''}`}
            to={`/tasks/${taskGroup.ID}`}
            key={taskGroup.ID}>
            {taskGroup.Name}
          </Link>
        ))}
        <input
          id={'new-group'}
          value={newGroupName}
          onChange={e => {
            const nextValue = newGroupName.length === 20 ? newGroupName : e.target.value;

            setNewGroupPlaceholderName(nextValue);
            setNewGroupName(nextValue);
          }}
          className={`group-create-input ${!createGroupVisibility ? 'visible' : ''}`}
          style={{width: `${newGroupName.length}ch`}}
          placeholder={newGroupPlaceholderName}
        />
        <button
          className={createGroupVisibility ? 'create' : 'cancel'}
          onClick={() => {
            setCreateGroupVisibility(!createGroupVisibility);
            if (createGroupVisibility) {
              document.getElementById('new-group')?.focus();
            } else {
              setNewGroupName('');
              setTimeout(() => setNewGroupPlaceholderName('New Group'), 400);
            }
          }}>
          {Plus}
          {createGroupVisibility ? 'Create' : 'Cancel'}
        </button>
        <button
          className={`confirm ${newGroupName.trim().length > 0 ? 'visible' : ''}`}
          onClick={createGroup}>
          {Check}
          Confirm
        </button>
      </div>
      <div className="right">
        <input
          type='text'
          className='search'
          placeholder={'Search Tasks'}
        />
      </div>
    </div>
  );
};

export default TaskGroupHeader;
