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
import {AccountGroupInput} from '../../../../types/account';
import {createAccountGroupRequest} from '../../store/accounts/reducers/create-account-group';
import {toast} from 'react-toastify';

const Accounts: React.FC = () => {
  const dispatch = useDispatch();
  const selectedAccountGroup = useSelector((state: RootState) => state.accounts.selectedAccountGroup);
  const accountGroups = useSelector((state: RootState) => state.accounts.accountGroups);
  const statuses = useSelector((state: RootState) => state.accounts.statuses);
  const { register, handleSubmit } = useForm<AccountGroupInput>();
  const [modalShown, setModalShown] = useState(false);
  const [accountsInput, setAccountsInput] = useState('');

  const createProxyGroup: SubmitHandler<AccountGroupInput> = data => {
    const siteAlreadyBeingUsed = accountGroups.find(accountGroup => accountGroup.Site === data.Site);
    if (siteAlreadyBeingUsed) return toast.error('An account group already exists for the selected site.');

    const Accounts: Record<string, string> = {};
    accountsInput.split('\n').forEach(account => {
      const [email, password] = account.split(':');

      Accounts[btoa(email)] = password;
    });

    // Insert validation here
    dispatch(createAccountGroupRequest({
      ...data,
      Accounts,
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
          <Label htmlFor={'Name'}>Group Name</Label>
          <input type={'text'} {...register('Name')} id={'Name'} />

          <Label htmlFor={'Site'}>Site</Label>
          <select {...register('Site')} id="Site">
            <option value={'FinishLine'}>FinishLine</option>
            <option value={'JD_Sports'}>JD_Sports</option>
            <option value={'YeezySupply'}>YeezySupply</option>
            <option value={'Supreme'}>Supreme</option>
            <option value={'Eastbay_US'}>Eastbay_US</option>
            <option value={'Champs_US'}>Champs_US</option>
            <option value={'Footaction_US'}>Footaction_US</option>
            <option value={'Footlocker_US'}>Footlocker_US</option>
            <option value={'Bestbuy'}>Bestbuy</option>
            <option value={'Pokemon_Center'}>Pokemon_Center</option>
            <option value={'Panini_US'}>Panini_US</option>
            <option value={'Topss'}>Topss</option>
            <option value={'Nordstorm'}>Nordstorm</option>
            <option value={'End'}>End</option>
            <option value={'Target'}>Target</option>
            <option value={'Amazon'}>Amazon</option>
            <option value={'Solebox'}>Solebox</option>
            <option value={'Onygo'}>Onygo</option>
            <option value={'Snipes'}>Snipes</option>
            <option value={'Ssense'}>Ssense</option>
            <option value={'Walmart'}>Walmart</option>
            <option value={'Hibbet'}>Hibbet</option>
          </select>
          <Label htmlFor={'Accounts'}>Accounts</Label>
          <textarea id={'Accounts'} value={accountsInput} onChange={e => setAccountsInput(e.target.value)} />

          <Button type={'submit'}>Create Account Group</Button>
        </form>
      </SideModal>
      <Button onClick={() => setModalShown(true)}>Create Account Group</Button>
    </div>
  );
};

export default Accounts;
