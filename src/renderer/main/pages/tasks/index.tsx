import React, {useMemo, useState} from 'react';
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
import {FieldType, ModuleField, ModuleInformation, ModuleStatus} from '../../../../types/modules';
import ipcRenderer from '../../util/ipc-renderer';
import Select from '../../components/atoms/select';
import TagInput from '../../components/atoms/tag-input';
import FormItem from '../../components/atoms/form-item';
import Label from '../../components/atoms/label';
import Play from '../../assets/images/icons/play';
import {Tag} from 'react-tag-input';
import Button from '../../components/atoms/button';
import {createTaskRequest} from '../../store/tasks/reducers/create-task';
import DatePicker from '../../components/atoms/date-picker';
import {updateTaskRequest} from '../../store/tasks/reducers/update-task';
import {DateTime} from 'luxon';
import SideModalHeader from '../../components/molecules/side-modal-header';
import {startTasksRequest} from '../../store/tasks/reducers/start-tasks';


// TODO Create Task Status enum

export type Task = {
  id: string;
  product: string,
  site: string;
  size: string;
  taskGroup: string;
  proxyGroup: string;
  accountGroup: string;
  status: string;
}

type Props = {

}

const Tasks: React.FC<Props> = () => {
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

  const getFieldFor = (field: ModuleField) => {
    const type = field.Type;
    if (type === FieldType.DROPDOWN) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <Select id={field.FieldKey} {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)}>
          {field.DropdownValues && field.DropdownValues.map((dropdownValue, index) => (
            <option value={dropdownValue} key={`${index}-${dropdownValue}`}>{dropdownValue}</option>
          ))}
        </Select>
      </FormItem>
    );
    if (type === FieldType.KEYWORDS) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <TagInput
          type={'positive'}
          tags={positiveKeywords}
          handleAddition={e => setPositiveKeywords([...positiveKeywords, e])}
          handleDelete={e => setPositiveKeywords(positiveKeywords.filter((k, i) => e !== i))}
          placeholder={'Positive Keywords'}
        />
        <TagInput
          type={'negative'}
          tags={negativeKeywords}
          handleAddition={e => setNegativeKeywords([...negativeKeywords, e])}
          handleDelete={e => setNegativeKeywords(negativeKeywords.filter((k, i) => e !== i))}
          placeholder={'Negative Keywords'}
        />
      </FormItem>
    );
    if (type === FieldType.NUMBER) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <input type="number" {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)} />
      </FormItem>
    );

    return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <input type="text" {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)}/>
      </FormItem>
    )
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
              <FormItem>
                <Label htmlFor={'site'}>Product Name</Label>
                <input type={'text'} {...taskFormMethods.register('Product.Name')}/>
              </FormItem>
              <FormItem>
                <Label htmlFor={'site'}>Start Time</Label>
                {!skippingTime && (
                  <DatePicker onChange={e => setStart(e)} />
                )}
                <Label htmlFor={'skip-time'}>
                  <input
                    id={'skip-time'}
                    type={'checkbox'}
                    checked={skippingTime}
                    onChange={e => setSkippingTime(e.target.checked)}
                  />{' '}
                  {skippingTime ? 'Skipped' : 'Skip?'}
                </Label>
              </FormItem>
              <FormItem>
                <Label htmlFor={'site'}>Image Url</Label>
                <input type={'text'} {...taskFormMethods.register('Product.Image')}/>
              </FormItem>
              <FormItem>
                <Label htmlFor={'site'}>Proxy List</Label>
                <Select name={`ProxyListID`} {...taskFormMethods.register('ProxyListID')}>
                  {proxyLists.map(proxyList => (
                    <option value={proxyList.ID} key={proxyList.ID}>{proxyList.Name}</option>
                  ))}
                </Select>
              </FormItem>
              <FormItem>
                <Label htmlFor={'site'}>Profile Group</Label>
                <Select name={`ProfileGroupID`} {...taskFormMethods.register('ProfileGroupID')}>
                  {profileGroups.map(profileGroup => (
                    <option value={profileGroup.ID} key={profileGroup.ID}>{profileGroup.Name}</option>
                  ))}
                </Select>
              </FormItem>
              <FormItem>
                <Label htmlFor={'site'}>Site</Label>
                <Select
                  defaultValue={0}
                  onChange={e => setSelectedModule(parseInt(e.target.value))}
                  id={'module'}>
                  {moduleInformation.map((module, index) => (
                    <option value={index} disabled={module.Status === ModuleStatus.DOWN} key={module.Name}>{ module.Name }</option>
                  ))}
                </Select>
              </FormItem>
              {moduleInformation[selectedModule].Fields.map(field => (
                <div key={field.FieldKey}>
                  {getFieldFor(field)}
                </div>
              ))}
              <Button type={'submit'}>Create Task</Button>
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
