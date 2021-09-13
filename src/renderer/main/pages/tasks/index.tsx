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
import {TaskCreation} from '../../../../types/task';
import {getTaskRequest} from '../../store/tasks/reducers/get-task';
import {deleteTaskRequest} from '../../store/tasks/reducers/delete-task';
import {updateTaskGroupRequest} from '../../store/tasks/reducers/update-task-group';


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
  const selectedTask = useSelector((state: RootState) => state.tasks.selectedTask);
  const taskGroups = useSelector((state: RootState) => state.tasks.taskGroups);
  const statuses = useSelector((state: RootState) => state.tasks.statuses);
  const taskFormMethods = useForm<TaskCreation>();
  const [modalShown, setModalShown] = useState(false);
  const [editingTask, setEditingTask] = useState(false);

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

    // Insert validation here

    // dispatch(createTaskRequest({
    //   ...data,
    //   GroupID: selectedTaskGroup.ID
    // }));
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

  return (
    <div className={'task-page'}>
      <FormProvider {...taskFormMethods}>
        <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
          <form onSubmit={taskFormMethods.handleSubmit(handleSubmission)}>
            {/*{*/}
            {/*  editingTask*/}
            {/*    ? selectedTask ? <TaskForm /> : <></>*/}
            {/*    : <TaskForm />*/}
            {/*}*/}
          </form>
        </SideModal>
      </FormProvider>
      <GroupTable<FetchedTaskGroupsTask>
        type={'Task'}
        groups={taskGroups.map(taskGroup => ({
          ID: taskGroup.ID,
          Name: taskGroup.Name,
          Items: taskGroup.Tasks ? taskGroup.Tasks : [],
        }))}
        items={selectedTaskGroup ? selectedTaskGroup.Tasks : []}
        selectedGroup={selectedTaskGroup ? {
          ID: selectedTaskGroup.ID,
          Name: selectedTaskGroup.Name,
          Items: selectedTaskGroup.Tasks
        } : null}
        headerItems={[
          {
            Header: 'Task Name',
            accessor: 'Name',
          },
          {
            Header: 'Email',
            accessor: 'Email',
          },
          {
            Header: 'First Name',
            accessor: 'Shipping.FirstName',
          },
          {
            Header: 'Last Name',
            accessor: 'Shipping.LastName',
          },
          {
            Header: 'Address',
            accessor: 'Shipping.ShippingAddress.AddressLine',
          },
        ]}
        createGroup={groupName => dispatch(createTaskGroupRequest({ Name: groupName }))}
        deleteGroup={() => dispatch(deleteTaskGroupRequest({ taskGroupId: selectedTaskGroup.ID }))}
        saveGroup={editTaskGroup}
        openModal={() => setModalShown(true)}
        setSelectedGroup={group => dispatch(getGroupRequest(group.ID))}
        groupFetching={statuses.taskGroupFetching}
        groupCreation={statuses.taskGroupCreation}
        groupDeletion={statuses.taskGroupDeletion}
        groupUpdating={statuses.taskGroupUpdating}
        actions={[
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
