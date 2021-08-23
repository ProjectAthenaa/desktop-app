import React, {useState} from 'react';
import './styles.scss';
import {Link, useLocation} from 'react-router-dom';
import Plus from '../../../assets/images/icons/plus';
import Check from '../../../assets/images/icons/check';

type TaskGroup = {
  title: string;
  id: string;
}

const fakeInitialState: TaskGroup[] = [
  {
    title: 'SUbreme',
    id: '398402-43242-432-4322-342424',
  },
  {
    title: 'McDonalds',
    id: '398402-43242-432-4322-penis',
  }
];

const TaskGroupHeader: React.FC = () => {
  const [createGroupVisibility, setCreateGroupVisibility] = useState(true);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPlaceholderName, setNewGroupPlaceholderName] = useState('New Group');
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([...fakeInitialState]);
  const {pathname} = useLocation();

  const createGroup = () => {
    setTaskGroups([...taskGroups, {id: 'uuid', title: newGroupName}]);
    setNewGroupName('');
    setNewGroupPlaceholderName('');
    setTimeout(() => setNewGroupPlaceholderName('New Group'), 400);
    setCreateGroupVisibility(true);
  };

  return (
    <div className={'task-group-header'}>
      <div className="group-list">
        {taskGroups.map(taskGroup => (
          <Link
            className={`group ${`/tasks/${taskGroup.id}` === pathname ? 'active' : ''}`}
            to={`/tasks/${taskGroup.id}`}
            key={taskGroup.id}>
            {taskGroup.title}
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
