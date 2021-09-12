import React, {useMemo, useState} from 'react';
import './styles.scss';
import GroupTable, {Group} from '../../components/organisms/group-table';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import Delete from '../../assets/images/icons/delete';
import {ActionColor} from '../../components/molecules/floating-header-table';
import {updateProxyListRequest} from '../../store/proxies/reducers/update-proxy-list';
import SideModal from '../../components/molecules/side-modal';
import {createProxyListRequest} from '../../store/proxies/reducers/create-proxy-list';
import {setSelectedProxyList} from '../../store/proxies';
import {ProxyList, NewProxyList, NewProxy} from '../../../../types/proxy';
import TextArea from '../../components/atoms/text-area';
import {SubmitHandler, useForm} from 'react-hook-form';
import Button from '../../components/atoms/button';
import {deleteProxyListRequest} from '../../store/proxies/reducers/delete-proxy-list';
import {ProxyListType} from '../../../../types/proxy';


const Proxies: React.FC = () => {
  const dispatch = useDispatch();
  const proxyListMethods = useForm<NewProxyList>();
  const selectedProxyList = useSelector((state: RootState) => state.proxies.selectedProxyList);
  const proxyLists = useSelector((state: RootState) => state.proxies.proxyLists);
  const statuses = useSelector((state: RootState) => state.proxies.statuses);
  const [modalShown, setModalShown] = useState(false);
  const [proxiesTextArea, setProxiesTextArea] = useState('');
  const itemsMemoized = useMemo(() => selectedProxyList
    ? selectedProxyList.Proxies.map(proxy => ({
      ID: proxy.ID,
      IP: proxy.IP,
      Port: proxy.Port,
      Username: proxy.Username,
      Password: proxy.Password,
    }))
    : [],
    [selectedProxyList]
  );
  const proxyListsMemoized = useMemo(() => proxyLists.map(proxyList => ({
    ...proxyList,
    Items: proxyList.Proxies.map(proxy => ({
      ID: proxy.ID,
      IP: proxy.IP,
      Port: proxy.Port,
      Username: proxy.Username,
      Password: proxy.Password,
    }))
  })), [proxyLists]);

  const createGroup = (groupName: string, extra: ProxyListType) => {
    dispatch(createProxyListRequest({
      Name: groupName, Type: extra, Proxies: []
    }));
  };

  const launchEditor = () => {
    let inputString = '';

    selectedProxyList.Proxies.forEach((proxy, index) => {
      inputString += `${proxy.Username}:${proxy.Password}:${proxy.IP}:${proxy.Port}`;
      if (index + 1 !== selectedProxyList.Proxies.length) {
        inputString += '\n';
      }
    });

    setProxiesTextArea(inputString);
    setModalShown(true);
  };

  const deleteGroup = () => {
    dispatch(deleteProxyListRequest(selectedProxyList.ID));
  };

  const closeAndResetModal = () => {
    setModalShown(false);
  };

  const deleteProxy = (id: string) => {
    dispatch(updateProxyListRequest({
      ...selectedProxyList,
      Proxies: selectedProxyList.Proxies.filter(proxy => proxy.ID !== id)
    }));
  };

  const handleSubmission: SubmitHandler<NewProxyList> = () => {
    const proxiesText = proxiesTextArea.trim().split('\n');

    // const newProxies: NewProxy[];
    //
    // dispatch(updateProxyListRequest({
    //   ...selectedProxyList,
    //   Proxies: newProxies
    // }));

    closeAndResetModal();
  }

  const setSelectedGroup = (group: Group) => {


    dispatch(setSelectedProxyList({...(group as unknown as ProxyList), Proxies: []}))
  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <form onSubmit={proxyListMethods.handleSubmit(handleSubmission)}>
          <TextArea
            placeholder={'email:password'}
            onChange={e => setProxiesTextArea(e.target.value)}
            value={proxiesTextArea}
          />
          <Button type={'submit'}>Update Proxies</Button>
        </form>
      </SideModal>
      <GroupTable
        type={'Proxy'}
        plural={'Proxies'}
        groups={proxyListsMemoized}
        items={selectedProxyList ? itemsMemoized : []}
        groupFetching={statuses.proxyListFetching}
        groupCreation={statuses.proxyListCreation}
        groupDeletion={statuses.proxyListDeletion}
        groupUpdating={statuses.proxyListUpdating}
        selectedGroup={selectedProxyList ? { ...selectedProxyList, Items: itemsMemoized } : null}
        headerItems={[
          {
            Header: 'IP',
            accessor: 'IP',
          },
          {
            Header: 'Port',
            accessor: 'Port',
          },
          {
            Header: 'Username',
            accessor: 'Username',
          },
          {
            Header: 'Password',
            accessor: 'Password',
          },
        ]}
        proxies
        createGroup={createGroup}
        deleteGroup={deleteGroup}
        saveGroup={() => console.log('')}
        openModal={launchEditor}
        setSelectedGroup={setSelectedGroup}
        actions={[
          {
            onClick: deleteProxy,
            icon: Delete,
            color: ActionColor.RED
          }
        ]}
      />
    </div>
  );
};

export default Proxies;

