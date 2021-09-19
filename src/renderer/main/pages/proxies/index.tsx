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
import {NewProxyList, Proxy, ProxyList, ProxyListType} from '../../../../types/proxy';
import TextArea from '../../components/atoms/text-area';
import {SubmitHandler, useForm} from 'react-hook-form';
import Button from '../../components/atoms/button';
import {deleteProxyListRequest} from '../../store/proxies/reducers/delete-proxy-list';
import SideModalHeader from '../../components/molecules/side-modal-header';
import SideModalBody from '../../components/molecules/side-modal-body';
import SideModalFooter from '../../components/molecules/side-modal-footer';
import ipcRenderer from '../../util/ipc-renderer';
import {ProxyTest} from '../../../../graphql/integration/handlers/proxies/test-proxy-list';
import Play from '../../assets/images/icons/play';


const Proxies: React.FC = () => {
  const dispatch = useDispatch();
  const [tests, setTests] = useState<ProxyTest[]>([]);
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

  const testProxies = async () => {
    const proxyStatuses = await ipcRenderer.invoke('testProxyList', selectedProxyList.ID);
    console.log(proxyStatuses);
    setTests(proxyStatuses);
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
      Proxies: selectedProxyList.Proxies.filter(proxy => proxy.ID !== id).map(proxy => ({
        IP: proxy.IP,
        Port: proxy.Port,
        Username: proxy.Username,
        Password: proxy.Password
      } as Proxy))
    }));
  };

  const handleSubmission: SubmitHandler<NewProxyList> = () => {
    const proxiesText = proxiesTextArea.trim().split('\n');
    const proxies: Proxy[] = [];

    proxiesText.forEach(proxy => {
      const [user, pass, ip, port] = proxy.split(":");
      proxies.push({
        IP: ip,
        Username: user,
        Password: pass,
        Port: port,
      } as Proxy)
    })

    dispatch(updateProxyListRequest({
      ...selectedProxyList,
      Proxies: proxies
    }));

    closeAndResetModal();
  }

  const setSelectedGroup = (group: Group) => {


    dispatch(setSelectedProxyList({...(group as unknown as ProxyList), Proxies: []}))
  };

  const editGroup = (newName: string) => {
    dispatch(updateProxyListRequest({
      ...selectedProxyList,
      Proxies: selectedProxyList.Proxies.map(proxy => ({
        IP: proxy.IP,
        Port: proxy.Port,
        Username: proxy.Username,
        Password: proxy.Password,
      } as Proxy)),
      Name: newName,
    }));
  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <SideModalHeader>Update Proxies</SideModalHeader>

        <form onSubmit={proxyListMethods.handleSubmit(handleSubmission)}>
          <SideModalBody>
            <TextArea
              placeholder={'username:password:ip:port'}
              onChange={e => setProxiesTextArea(e.target.value)}
              value={proxiesTextArea}
              className={'fill'}
            />
          </SideModalBody>
          <SideModalFooter>
            <Button type={'submit'}>Update Proxies</Button>
          </SideModalFooter>
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
        saveGroup={editGroup}
        openModal={launchEditor}
        setSelectedGroup={setSelectedGroup}
        actions={[
          {
            onClick: testProxies,
            icon: Play,
            color: ActionColor.GREEN,
            hideBody: true
          },
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

