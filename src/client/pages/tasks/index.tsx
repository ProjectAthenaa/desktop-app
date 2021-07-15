import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import './styles.scss';
import TaskGroupHeader from '../../components/organisms/task-group-header';
import FloatingHeaderTable, {ActionColor} from '../../components/molecules/floating-header-table';
import PlayIcon from '../../assets/images/icons/play';
import EditIcon from '../../assets/images/icons/edit';
import DeleteIcon from '../../assets/images/icons/delete';
import OverlayScrollbars from 'overlayscrollbars';


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
            data={[
              {
                product: 'Jordan 1 Retro High Travis Scott with the black stripe',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },

              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },

              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
              {
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },{
                product: 'Jordan 1 Retro High Travis Scott',
                site: 'SNKRS',
                size: '10',
                profileGroup: 'Andrew',
                proxyGroup: 'Midnight DC',
                accountGroup: 'Nike 1',
                status: 'Checking out'
              },
            ]}
            actions={[
              {
                onClick: () => {
                  console.log('click')
                },
                icon: PlayIcon,
                color: ActionColor.GREEN
              },
              {
                onClick: () => console.log('click'),
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
