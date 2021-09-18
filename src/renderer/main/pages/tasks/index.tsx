import React, {useState} from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {toast} from 'react-toastify';
import {createTaskGroupRequest} from '../../store/tasks/reducers/create-task-group';
import SideModal from '../../components/molecules/side-modal';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import GroupTable from '../../components/organisms/group-table';
import {FetchedTaskGroupsTask} from '../../../../graphql/integration/handlers/tasks/get-group';
import {deleteTaskGroupRequest} from '../../store/tasks/reducers/delete-task-group';
import {getGroupRequest} from '../../store/tasks/reducers/get-group';
import Edit from '../../assets/images/icons/edit';
import Delete from '../../assets/images/icons/delete';
import {ActionColor} from '../../components/molecules/floating-header-table';
import {LookupType, TaskCreation} from '../../../../types/task';
import {getTaskRequest} from '../../store/tasks/reducers/get-task';
import {deleteTaskRequest} from '../../store/tasks/reducers/delete-task';
import {updateTaskGroupRequest} from '../../store/tasks/reducers/update-task-group';
import { ModuleInformation} from '../../../../types/modules';
import ipcRenderer from '../../util/ipc-renderer';
import Play from '../../assets/images/icons/play';
import {Tag} from 'react-tag-input';
import Button from '../../components/atoms/button';
import {createTaskRequest} from '../../store/tasks/reducers/create-task';
import {DateTime} from 'luxon';
import SideModalHeader from '../../components/molecules/side-modal-header';
import {startTasksRequest} from '../../store/tasks/reducers/start-tasks';
import SideModalBody from '../../components/molecules/side-modal-body';
import SideModalFooter from '../../components/molecules/side-modal-footer';
import TaskForm from './task-form';




const Tasks: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTaskGroup = useSelector((state: RootState) => state.tasks.selectedTaskGroup);
  const proxyLists = useSelector((state: RootState) => state.proxies.proxyLists);
  const profileGroups = useSelector((state: RootState) => state.profiles.profileGroups);
  const selectedTask = useSelector((state: RootState) => state.tasks.selectedTask);
  const taskGroups = useSelector((state: RootState) => state.tasks.taskGroups);
  const statuses = useSelector((state: RootState) => state.tasks.statuses);
  const [moduleInformation, setModuleInformation] = useState<ModuleInformation[]>([]);
  const taskFormMethods = useForm<TaskCreation>();
  const [modalShown, setModalShown] = useState(false);
  const [editingTask, setEditingTask] = useState(false);
  const [skippingTime, setSkippingTime] = useState(false);
  const [selectedModule, setSelectedModule] = useState(0);
  const [start, setStart] = useState(DateTime.now().toISO());
  const [positiveKeywords, setPositiveKeywords] = useState<Tag[]>([]);
  const [negativeKeywords, setNegativeKeywords] = useState<Tag[]>([]);

  const handleSubmission: SubmitHandler<TaskCreation> = data =>
    !editingTask
      ? createTask(data)
      : updateTask(data);

  const updateTask: SubmitHandler<TaskCreation> = data => {
    if (!selectedTaskGroup) return toast.error('You haven\'t selected a task group.');
    if (selectedTask) return toast.error('You haven\'t selected task.');

    // Insert validation here

    // dispatch(updateTaskRequest({
    //   ...data,
    //   ID: selectedTask.ID,
    // }));
  };

  const launchEditor = (id: string) => {
    setEditingTask(true);
    dispatch(getTaskRequest(id));
  };

  const createTask: SubmitHandler<TaskCreation> = data => {
    if (!selectedTaskGroup) return toast.error('You haven\'t selected a task group');

    const newTask: TaskCreation = {
      ...data,
      StartTime: !skippingTime ? start : undefined,
      Product: {
        ...data.Product,
        LookupType: LookupType.Other,
        Site: moduleInformation[selectedModule].Name,
        PositiveKeywords: positiveKeywords.map(keyword => keyword.text),
        NegativeKeywords: negativeKeywords.map(keyword => keyword.text)
      }
    };

    // Insert validation here
    dispatch(createTaskRequest({
      ...newTask,
      TaskGroupID: selectedTaskGroup.ID
    }));
    ipcRenderer.invoke('send-command');
  };

  const deleteTask = (id: string) => dispatch(deleteTaskRequest({ taskId: id }));

  const editTaskGroup = (newName: string) => {
    dispatch(updateTaskGroupRequest({
      taskGroupId: selectedTaskGroup.ID,
      Name: newName,
    }));
  };

  const closeAndResetModal = () => {
    if (editingTask) setEditingTask(false);

    setModalShown(false);

    // Reset form
  };

  const openModal = async () => {
    if (!profileGroups || profileGroups.length === 0) return toast.warn('You should have profile groups set up before proceeding.');
    if (!proxyLists || proxyLists.length === 0) return toast.warn('You should have proxy lists set up before proceeding.');

    const modules = await ipcRenderer.invoke('getSiteInformation');

    setModuleInformation(modules);
    setModalShown(true);
  };



  const playTask = (id?: string) => {
    if (id) {
      dispatch(startTasksRequest([id]));
      return;
    }

    const tasksToStart: string[] = selectedTaskGroup.Tasks.map(task => task.ID);

    dispatch(startTasksRequest(tasksToStart));
  };

  return (
    <div className={'task-page'}>
      <FormProvider {...taskFormMethods}>
        {moduleInformation.length > 0 && (
          <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
            <SideModalHeader>Task Creation</SideModalHeader>
            <form onSubmit={taskFormMethods.handleSubmit(handleSubmission)}>
              <SideModalBody>
                <TaskForm
                  skippingTime={skippingTime}
                  setSkippingTime={setSkippingTime}
                  setStart={setStart}
                  proxyLists={proxyLists}
                  profileGroups={profileGroups}
                  selectedModule={selectedModule}
                  setSelectedModule={setSelectedModule}
                  moduleInformation={moduleInformation}
                  positiveKeywords={positiveKeywords}
                  negativeKeywords={negativeKeywords}
                  setPositiveKeywords={setPositiveKeywords}
                  setNegativeKeywords={setNegativeKeywords}
                />
              </SideModalBody>
              <SideModalFooter>
                <Button type={'submit'}>Create Task</Button>
              </SideModalFooter>
            </form>
          </SideModal>
        )}
      </FormProvider>
      <GroupTable<FetchedTaskGroupsTask>
        type={'Task'}
        groups={taskGroups.map(taskGroup => ({
          ID: taskGroup.ID,
          Name: taskGroup.Name,
          Items: taskGroup.Tasks ? taskGroup.Tasks : [],
        }))}
        items={selectedTaskGroup
          ? selectedTaskGroup.Tasks.map(task => ({
            ...task,
              StartTime: task.StartTime ? DateTime.fromISO(task.StartTime).toLocaleString(DateTime.DATETIME_MED) : undefined
          }))
          : []}
        selectedGroup={selectedTaskGroup ? {
          ID: selectedTaskGroup.ID,
          Name: selectedTaskGroup.Name,
          Items: selectedTaskGroup.Tasks
        } : null}
        headerItems={[
          {
            Header: 'Product',
            accessor: 'Product.Name',
          },
          {
            Header: 'Proxy List',
            accessor: 'ProxyList.Name',
          },
          {
            Header: 'Profile Group',
            accessor: 'ProfileGroup.Name',
          },
          {
            Header: 'Site',
            accessor: 'Product.Site',
          },
          {
            Header: 'Start Time',
            accessor: 'StartTime',
          },
          {
            Header: 'Status',
            accessor: 'Status',
          },
        ]}
        createGroup={groupName => dispatch(createTaskGroupRequest({ Name: groupName }))}
        deleteGroup={() => dispatch(deleteTaskGroupRequest({ taskGroupId: selectedTaskGroup.ID }))}
        saveGroup={editTaskGroup}
        openModal={openModal}
        setSelectedGroup={group => dispatch(getGroupRequest(group.ID))}
        groupFetching={statuses.taskGroupFetching}
        groupCreation={statuses.taskGroupCreation}
        groupDeletion={statuses.taskGroupDeletion}
        groupUpdating={statuses.taskGroupUpdating}
        actions={[
          {
            onClick: playTask,
            icon: Play,
            color: ActionColor.GREEN,
          },
          {
            onClick: launchEditor,
            icon: Edit
          },
          {
            onClick: deleteTask,
            icon: Delete,
            color: ActionColor.RED
          }
        ]}
      />
    </div>
  );
};

export default Tasks;
