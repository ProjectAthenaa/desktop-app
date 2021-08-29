import React, {useReducer, useState} from 'react';
import './styles.scss';
import {Link, useLocation} from 'react-router-dom';
import Plus from '../../../assets/images/icons/plus';
import Check from '../../../assets/images/icons/check';
import {useDispatch, useSelector} from 'react-redux';
import {TasksState} from '../../../store/tasks';
import {TaskGroup} from '../../../../../types/task';
import {RootState} from '../../../store';
import {createTaskGroupRequest} from '../../../store/tasks/reducers/create-task-group';


const TaskGroupHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { taskGroups } = useSelector((state: RootState) => state.tasks);
  const [createGroupVisibility, setCreateGroupVisibility] = useState(true);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPlaceholderName, setNewGroupPlaceholderName] = useState('New Group');
  const {pathname} = useLocation();

  const createGroup = async () => {
    if (newGroupName.trim() === "") return; // TODO: add a modal or toast displaying no name set or something

    console.log('pls')
    dispatch(createTaskGroupRequest({ Name: newGroupName.trim() }));
    setNewGroupName('');
    setNewGroupPlaceholderName('');
    setTimeout(() => setNewGroupPlaceholderName('New Group'), 400);
    setCreateGroupVisibility(true);
  };

  return (
    <div className={'task-group-header'}>
      <div className="group-list">
        {(taskGroups || []).map(taskGroup => (
          <Link
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
