import React, {useEffect, useRef, useState} from 'react';
import './styles.scss';
import Plus from '../../../assets/images/icons/plus';
import Check from '../../../assets/images/icons/check';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {createTaskGroupRequest} from '../../../store/tasks/reducers/create-task-group';
import {Status} from '../../../store/util/set-status';
import useOutsideAlerter from '../../../util/useOutsideAlerter';
import {TaskGroup} from '../../../../../types/task';
import EditIcon from '../../../assets/images/icons/edit';
import DeleteIcon from '../../../assets/images/icons/delete';
import {deleteTaskGroupRequest} from '../../../store/tasks/reducers/delete-task-group';
import {toast} from 'react-toastify';
import Button from '../../atoms/button';

const TaskGroupItem: React.FC<{ taskGroup: TaskGroup }> = ({ taskGroup }) => {
  const dispatch = useDispatch();
  const taskGroupDeletionStatus = useSelector((state: RootState) => state.tasks.statuses.taskGroupDeletion)
  const [contextMenuShown, setContextMenuShown] = useState(false);
  const contextMenuRef = useRef();
  const [isDeleting, setIsDeleting] = useState(false);

  useOutsideAlerter(contextMenuRef, () => setContextMenuShown(false));
  useEffect(() => {
    if (taskGroupDeletionStatus === Status.REJECTED) {
      // Todo: Failed toast pop up
      setIsDeleting(false);
    }
  }, []);

  const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    setContextMenuShown(true);
  };

  const handleDeleteClick = async () => {
    // TODO: Confirmation
    setIsDeleting(true);
    dispatch(deleteTaskGroupRequest({ taskGroupId: taskGroup.ID }));
  };

  // const handleEditClick = () => {
  //
  // };

  return (
    <div
      onContextMenu={handleRightClick}
      className={`group ${isDeleting ? 'deleting' : ''}`}
      key={taskGroup.ID}>
      <span>{taskGroup.Name}</span>
      <div
        ref={contextMenuRef}
        className={`context-menu ${contextMenuShown ? 'shown' : ''}`}>
        <button>{ EditIcon }</button>
        <button
          onClick={handleDeleteClick}
          className={'red'}>
          { DeleteIcon }
        </button>
      </div>
    </div>
  )
}

const TaskGroupHeader: React.FC = () => {
  const dispatch = useDispatch();
  const taskGroups = useSelector((state: RootState) => state.tasks.taskGroups);
  const [createGroupVisibility, setCreateGroupVisibility] = useState(true);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPlaceholderName, setNewGroupPlaceholderName] = useState('New Group');

  const createGroup = async () => {
    if (newGroupName.trim() === "") return toast.warn('The group name cannot be empty.');

    const groupAlreadyExists = taskGroups.find(taskGroup => taskGroup.Name === newGroupName.trim());
    if (groupAlreadyExists) return toast.warn(`A group with the name ${newGroupName.trim()} already exists.`);

    setNewGroupName('');
    setNewGroupPlaceholderName('');
    setTimeout(() => setNewGroupPlaceholderName('New Group'), 400);
    setCreateGroupVisibility(true);
    dispatch(createTaskGroupRequest({ Name: newGroupName.trim() }));
  };

  return (
    <div className={'task-group-header'}>
      <div className="group-list">
        {(taskGroups || []).map(taskGroup => (
          <TaskGroupItem taskGroup={taskGroup} key={taskGroup.ID} />
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
        <div className="creation-area">
          <Button white>Create Task</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskGroupHeader;
