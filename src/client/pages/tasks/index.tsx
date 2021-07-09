import React from 'react';
import './styles.scss';
import TaskGroupHeader from '../../components/organisms/task-group-header';
import FloatingHeaderTable, {ActionColor} from '../../components/molecules/floating-header-table';
import PlayIcon from '../../assets/images/icons/play';
import EditIcon from '../../assets/images/icons/edit';
import DeleteIcon from '../../assets/images/icons/delete';


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
  return (
    <div>
      <TaskGroupHeader />
      <div className="task-table">
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
              onClick: () => console.log('click'),
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
    </div>
  );
};

export default Tasks;
