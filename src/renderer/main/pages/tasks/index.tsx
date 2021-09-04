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

  return (
    <div className={'task-page'}>
      {/*<TaskGroupHeader />*/}
      <div className={'task-groups'}>
        <div className="top">
          <Button white>Create Task</Button>
        </div>
        <div className="groups">
          {taskGroups.map(taskGroup => (
            <div
              className={`task-group${selectedTaskGroup.ID === taskGroup.ID ? ' active' : ''}`}
              onClick={() => dispatch(setSelectedTaskGroup(taskGroup))}
              key={taskGroup.ID}>
              <h3>{taskGroup.Name}</h3>
              <div className="meta">
                <span>12 Tasks</span>
                <div className="actions">

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className={`context${contextShown ? ' shown' : ''}`}>
            <input type="text" placeholder={"New Task Group"}/>
            <div className="buttons">
              <Button>Save</Button>
              <Button secondary onClick={() => setContextShown(false)}>Cancel</Button>
            </div>
          </div>
          <Button white onClick={() => setContextShown(true)}>Create Task Group</Button>
        </div>
      </div>
      <OverlayScrollbarsComponent
        style={{ height: 'calc(100vh - 108px)', width: 'calc(100vw - 475px)' }}
        options={{ scrollbars: { autoHide: 'never'}, callbacks: { onOverflowChanged } }}
      >
        <div className={`task-table${xIsScrollable ? ' x-can-scroll' : ''}`}>
          <FloatingHeaderTable
            columns={[
              { Header: 'Product', accessor: 'product' },
              { Header: 'Site', accessor: 'site' },
              { Header: 'Size', accessor: 'size' },
              { Header: 'Profile Group', accessor: 'profileGroup' },
              { Header: 'Proxy Group', accessor: 'proxyGroup' },
              { Header: 'Account Group', accessor: 'accountGroup' },
              { Header: 'Status', accessor: 'status' },
            ]}
            data={[]}
            actions={[
              {
                onClick: async () => {
                  console.log('login invoked')
                },
                icon: PlayIcon,
                color: ActionColor.GREEN
              },
              {
                onClick: async () => {
                  console.log('login invoked')
                },
                icon: EditIcon
              },
              {
                onClick: () => console.log('click'),
                icon: DeleteIcon,
                color: ActionColor.RED
              },
            ]} />
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default Tasks;
