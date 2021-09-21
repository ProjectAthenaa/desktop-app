import React, {useEffect, useState} from 'react';
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
import {LookupType, Site, TaskCreation} from '../../../../types/task';
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
import AreYouSure from '../../components/molecules/dialogues/are-you-sure';
import enumFormatter from '../../util/status-formatter';
import {updateTaskRequest} from '../../store/tasks/reducers/update-task';




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

  const handleSubmission: SubmitHandler<TaskCreation> = data => {
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

    if (!editingTask) {
      dispatch(createTaskRequest({
        ...newTask,
        TaskGroupID: selectedTaskGroup.ID
      }));
    } else {
      dispatch(updateTaskRequest({
        ...newTask,
        taskId: selectedTask.ID,
        TaskGroupID: selectedTaskGroup.ID,
        ProductID: selectedTask.Product.ID,
      }));
    }

    taskFormMethods.reset();
    setModalShown(false);

    ipcRenderer.invoke('send-command');
  };

  const deleteTask = (id?: string) => {
    if (!id) {
      toast.warn(<AreYouSure yesCallback={clearTasks} doThis={'clear all your tasks'} />, {
        toastId: 'clear-all-tasks'
      });
      return;
    }

    dispatch(deleteTaskRequest({taskId: id}));
  }

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

  const clearTasks = () => {
    selectedTaskGroup.Tasks.forEach(({ ID }) => dispatch(deleteTaskRequest({ taskId: ID })));
  }

  const playTask = (id?: string) => {
    if (id) {
      dispatch(startTasksRequest([id]));
      return;
    }

    const tasksToStart: string[] = selectedTaskGroup.Tasks.map(task => task.ID);

    dispatch(startTasksRequest(tasksToStart));
  };

  const loadEditForm = async () => {
    // Check to see if module is available
    const modules = await ipcRenderer.invoke('getSiteInformation') as ModuleInformation[];
    setModuleInformation(modules);
    let foundModuleIndex: number | null = null;
    console.log(moduleInformation)
    const foundModule = modules.find((module, index) => {
      console.log(module.Name === selectedTask.Product.Site)
      console.log(module.Name)
      console.log(selectedTask.Product.Site)
      if (module.Name === selectedTask.Product.Site) {
        foundModuleIndex = index;
        return true;
      }
    });

    if (!foundModule) {
      setEditingTask(false);
      toast.error(`Editing for this task has been temporarily disabled. The ${enumFormatter(selectedTask.Product.Site)} service is currently unavailable at this time.`)
      return;
    }

    // This is only set due to the site being set by an index
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSelectedModule(foundModuleIndex);
    if (!selectedTask.StartTime) setSkippingTime(true)
    else setSkippingTime(false);
    taskFormMethods.setValue('Product.Name', selectedTask.Product.Name);
    taskFormMethods.setValue('Product.Image', selectedTask.Product.Image);
    taskFormMethods.setValue('ProxyListID', selectedTask.ProxyList.ID);
    taskFormMethods.setValue('ProfileGroupID', selectedTask.ProfileGroup.ID);

    Object.keys(selectedTask.Product.Metadata).forEach((key) => {
      taskFormMethods.setValue(`Product.Metadata.${key}`, selectedTask.Product.Metadata[key] as string);
    });

    setModalShown(true);
  }

  useEffect(() => {
    if (editingTask && !modalShown) {
      loadEditForm()
    }
  }, [selectedTask]);

  return (
    <div className={'task-page'}>
      <FormProvider {...taskFormMethods}>
        {moduleInformation.length > 0 && (
          <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
            <SideModalHeader>Task Creation</SideModalHeader>
            <form onSubmit={taskFormMethods.handleSubmit(handleSubmission)}>
              <SideModalBody>
                <TaskForm
                  editing={editingTask}
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
                <Button type={'submit'}>{editingTask ? 'Update' : 'Create'} Task</Button>
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
            icon: Edit,
            hideHead: true,
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
