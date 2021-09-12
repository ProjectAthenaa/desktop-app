import React, {useMemo, useState} from 'react';
import './styles.scss';
import GroupTable, {Group} from '../../components/organisms/group-table';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import Edit from '../../assets/images/icons/edit';
import Delete from '../../assets/images/icons/delete';
import {ActionColor} from '../../components/molecules/floating-header-table';
import {updateAccountGroupRequest} from '../../store/accounts/reducers/update-account-group';
import SideModal from '../../components/molecules/side-modal';
import {createAccountGroupRequest} from '../../store/accounts/reducers/create-account-group';
import {Site} from '../../../../types/task';
import {setSelectedAccountGroup} from '../../store/accounts';
import {AccountGroup, AccountGroupInput} from '../../../../types/account';
import TextArea from '../../components/atoms/text-area';
import {SubmitHandler, useForm} from 'react-hook-form';
import Button from '../../components/atoms/button';
import {toast} from 'react-toastify';
import base64 from 'base-64';
import {deleteAccountGroupRequest} from '../../store/accounts/reducers/delete-account-group';


const Accounts: React.FC = () => {
  const dispatch = useDispatch();
  const profileFormMethods = useForm<AccountGroupInput>();
  const selectedAccountGroup = useSelector((state: RootState) => state.accounts.selectedAccountGroup);
  const accountGroups = useSelector((state: RootState) => state.accounts.accountGroups);
  const statuses = useSelector((state: RootState) => state.accounts.statuses);
  const [modalShown, setModalShown] = useState(false);
  const [accountsTextArea, setAccountsTextArea] = useState('');
  const accountGroupsMemoized = useMemo(() => accountGroups.map(accountGroup => ({
    ...accountGroup,
    Items: accountGroup.Accounts ? Object.keys(accountGroup.Accounts).map((key, index) => ({
      ID: index.toString(),
    })) : []
  })), [accountGroups]);
  const itemsMemoized = useMemo(() => {
    if (!selectedAccountGroup) return [];
    return Object.keys(selectedAccountGroup.Accounts).map((key) => ({
      ID: key,
      Name: selectedAccountGroup.Name,
      Site: selectedAccountGroup.Site,
      Email: key,
      Password: selectedAccountGroup.Accounts[key],
    }));
  }, [accountGroups]);

  const createGroup = (groupName: string, site: Site) => {
    dispatch(createAccountGroupRequest({
      Name: groupName, Site: site, Accounts: {}
    }));
  };

  const launchEditor = () => {
    let inputString = '';

    Object.keys(selectedAccountGroup.Accounts).forEach((key, index) => {
      inputString += `${key}:${selectedAccountGroup.Accounts[key]}`;
      if (index + 1 !== Object.keys(selectedAccountGroup.Accounts).length) {
        inputString += '\n';
      }
    });

    setAccountsTextArea(inputString);
    setModalShown(true);
  };

  const deleteGroup = () => {
    dispatch(deleteAccountGroupRequest(selectedAccountGroup.ID));
  };

  const closeAndResetModal = () => {
    setModalShown(false);
  };

  const deleteAccount = (id: string) => {
    const accounts: Record<string, string> = {};

    Object.keys(selectedAccountGroup.Accounts).forEach(key => {
      if (key !== id) accounts[base64.encode(key)] = selectedAccountGroup.Accounts[key];
    });

    dispatch(updateAccountGroupRequest({
      ...selectedAccountGroup,
      Accounts: accounts
    }));
  };

  const handleSubmission: SubmitHandler<AccountGroupInput> = () => {
    const accountsText = accountsTextArea.trim().split('\n');
    const accounts: Record<string, string> = {};

    accountsText.forEach(accountText => {
      const potentialAccount = accountText.trim();
      console.log(potentialAccount)

      if (!potentialAccount || potentialAccount === '') return;

      console.log('hit')

      const [username, password] = potentialAccount.split(':');

      if (!username || !password) return toast.warn(`Invalid account pattern for: ${accountText}`);

      accounts[base64.encode(username).split('=').join('')] = password;
    });

    dispatch(updateAccountGroupRequest({
      ...selectedAccountGroup,
      Accounts: accounts
    }));

    closeAndResetModal();
  }

  const setSelectedGroup = (group: Group) => {
    const accounts = group.Items.reduce((o, k: { ID: string; Email: string; Password: string; }) =>
      Object.assign(o, {[k.Email]: k.Password}), {});

    dispatch(setSelectedAccountGroup({...(group as unknown as AccountGroup), Accounts: accounts}))
  };

  return (
    <div className={'task-page'}>
      <SideModal isOpen={modalShown} onCloseClick={closeAndResetModal}>
        <form onSubmit={profileFormMethods.handleSubmit(handleSubmission)}>
          <TextArea
            placeholder={'email:password'}
            onChange={e => setAccountsTextArea(e.target.value)}
            value={accountsTextArea}
          />
          <Button type={'submit'}>Import Accounts</Button>
        </form>
      </SideModal>
      <GroupTable
        type={'Account'}
        groups={accountGroupsMemoized}
        items={itemsMemoized}
        groupFetching={statuses.accountGroupFetching}
        groupCreation={statuses.accountGroupCreation}
        groupDeletion={statuses.accountGroupDeletion}
        groupUpdating={statuses.accountGroupUpdating}
        selectedGroup={selectedAccountGroup ? {
          ...selectedAccountGroup,
          Items: itemsMemoized,
        } : null}
        headerItems={[
          {
            Header: 'Email',
            accessor: 'Email',
          },
          {
            Header: 'Password',
            accessor: 'Password',
          },
          {
            Header: 'Site',
            accessor: 'Site',
          },
        ]}
        accounts
        createGroup={createGroup}
        deleteGroup={deleteGroup}
        saveGroup={() => console.log('')}
        openModal={launchEditor}
        setSelectedGroup={setSelectedGroup}
        actions={[
          {
            onClick: deleteAccount,
            icon: Delete,
            color: ActionColor.RED
          }
        ]}
      />
    </div>
  );
};

export default Accounts;
