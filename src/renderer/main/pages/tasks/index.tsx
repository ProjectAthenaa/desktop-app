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
import {useSelector} from 'react-redux';
import {TaskGroup} from '../../../../types/task';
import {TasksState} from '../../store/tasks';


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
  // const { tasks, taskGroups, selectedTaskGroup, selectedTask } = useSelector((state: TasksState) => state);
  const [xIsScrollable, setXIsScrollable] = useState(true);

  const onOverflowChanged = (e: { xScrollable: boolean }) => setXIsScrollable(e.xScrollable);

  return (
    <div className={'task-page'}>
      <TaskGroupHeader />
      <OverlayScrollbarsComponent
        style={{
          height: 'calc(100vh - 175px)',
          width: 'calc(100vw - 275px)'
        }}
        options={{
          scrollbars: { autoHide: 'never'},
          callbacks: {
            onOverflowChanged
          }
        }}
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
