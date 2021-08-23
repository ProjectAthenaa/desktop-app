import React, {useEffect} from 'react';
import './styles.scss';
import AuthTemplate from '../../templates/auth';
import ipcRenderer from '../../../main/util/ipc-renderer';

const Auth: React.FC = () => {
  const handleAuthentication = async (token: string) => {
    return await ipcRenderer.invoke('login', { token });
  };

  return (
    <AuthTemplate
      submitKey={handleAuthentication}
    />
  );
};

export default Auth;
