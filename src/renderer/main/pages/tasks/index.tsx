import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import './styles.scss';
import TaskGroupHeader from '../../components/organisms/task-group-header';
import FloatingHeaderTable, {ActionColor} from '../../components/molecules/floating-header-table';
import PlayIcon from '../../assets/images/icons/play';
import EditIcon from '../../assets/images/icons/edit';
import DeleteIcon from '../../assets/images/icons/delete';
import OverlayScrollbars from 'overlayscrollbars';
import ipcRenderer from '../../util/ipc-renderer';
import {useDispatch, useSelector} from 'react-redux';
import {TaskGroup} from '../../../../types/task';
import {setSelectedTaskGroup, TasksState} from '../../store/tasks';
import Button from '../../components/atoms/button';
import {RootState} from '../../store';
import {toast} from 'react-toastify';
import {createTaskGroupRequest} from '../../store/tasks/reducers/create-task-group';
import SideModal from '../../components/molecules/side-modal';
import GroupTable from '../../components/organisms/group-table';
import Label from '../../components/atoms/label';
import {FetchedProfileGroupsProfile} from '../../../../graphql/integration/handlers/profiles/get-group';
import {FetchedProfileGroupSlim} from '../../../../graphql/integration/handlers/profiles/get-profile-groups';
import {useForm} from 'react-hook-form';
import {NewProxyList} from '../../../../types/proxy';
import DatePicker from '../../components/atoms/date-picker';


// TODO Create Task Status enum

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

const Tasks: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const selectedTaskGroup = useSelector((state: RootState) => state.tasks.selectedTaskGroup);
  const taskGroups = useSelector((state: RootState) => state.tasks.taskGroups);
  const [xIsScrollable, setXIsScrollable] = useState(true);
  const onOverflowChanged = (e: { xScrollable: boolean }) => setXIsScrollable(e.xScrollable);
  const [contextShown, setContextShown] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm<NewProxyList>();

  const createGroup = async (groupName: string) => {
    setContextShown(false);

    if (groupName.trim() === "") {
      setContextShown(true);
      return toast.warn('The group name cannot be empty.');
    }

    const groupAlreadyExists = taskGroups.find(taskGroup => taskGroup.Name === groupName.trim());
    if (groupAlreadyExists) {
      setContextShown(true);
      return toast.warn(`A group with the name ${groupName.trim()} already exists.`);
    }

    dispatch(createTaskGroupRequest({ Name: groupName.trim() }));
  };
  const closeAndResetModal = () => {
    setModalShown(false);
  };
  const createProxyGroup = () => {

  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <form onSubmit={handleSubmit(createProxyGroup)}>
          <Label htmlFor={'Name'}>Start Date/Time</Label>
          <DatePicker onDateChange={(d) => setStartDate(d.toJSDate())}/>

          <Button type={'submit'}>Create Task</Button>
        </form>
      </SideModal>
      <Button onClick={() => setModalShown(true)}>Create Task Group</Button>
      <Button onClick={() => setModalShown(true)}>Create Task Group</Button>
    </div>
  );
};

export default Tasks;
