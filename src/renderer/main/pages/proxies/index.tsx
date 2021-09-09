import React, {useState} from 'react';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/atoms/button';
import {RootState} from '../../store';
import SideModal from '../../components/molecules/side-modal';
import { useForm, SubmitHandler } from 'react-hook-form';
import Label from '../../components/atoms/label';
import {NewProxyList} from '../../../../types/proxy';
import {createProxyListRequest} from '../../store/proxies/reducers/create-proxy-list';

const Proxies: React.FC = () => {
  const dispatch = useDispatch();
  const selectedProfileGroup = useSelector((state: RootState) => state.proxies.selectedProxyList);
  const profileGroups = useSelector((state: RootState) => state.proxies.proxyLists);
  const statuses = useSelector((state: RootState) => state.proxies.statuses);
  const { register, handleSubmit } = useForm<NewProxyList>();
  const [modalShown, setModalShown] = useState(false);
  const [proxiesInput, setProxiesInput] = useState('');

  const createProxyGroup: SubmitHandler<NewProxyList> = data => {
    // Insert validation here

    dispatch(createProxyListRequest({
      ...data,
      Proxies: proxiesInput.split('\n').map(proxy => {
        const [Username, Password, IP, Port] = proxy.split(':');

        return {
          Username, Password, IP, Port
        }
      })
    }));
  };

  const closeAndResetModal = () => {
    setModalShown(false);

    // Reset form
  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <form onSubmit={handleSubmit(createProxyGroup)}>
          <Label htmlFor={'Name'}>List Name</Label>
          <input type={'text'} {...register('Name')} id={'Name'} />

          <Label htmlFor={'Type'}>Proxy Type</Label>
          <select {...register('Type')} id="Type">
            <option value="Residential">Residential</option>
            <option value="Datacenter">Datacenter</option>
            <option value="ISP">ISP</option>
          </select>
          <Label htmlFor={'Proxies'}>Proxies</Label>
          <textarea id={'Proxies'} value={proxiesInput} onChange={e => setProxiesInput(e.target.value)} />

          <Button type={'submit'}>Create Proxy List</Button>
        </form>
      </SideModal>
      <Button onClick={() => setModalShown(true)}>Create Proxy List</Button>
    </div>
  );
};

export default Proxies;
