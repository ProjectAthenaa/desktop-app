import React, {useEffect, useState} from 'react';
import './styles.scss';
import Frame from '../../components/organisms/frame';
import LogoImage from '../../../main/assets/images/logo.svg';

type Props = {
  submitKey: (token: string) => Promise<{ message: string; }>;
}


const AuthTemplate: React.FC<Props> = ({ submitKey }) => {
  const [page, setPage] = useState(0);
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setMessage('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    const response = await submitKey(token);

    setToken('');
    setMessage(response.message)
    setLoading(false);
  }

  return (
    <div className={'auth'}>
      <Frame />
      <div className="view">
        <img src={LogoImage} alt="Project Athena" className="logo"/>
        <div className={`pages page-${page}`}>
          <div className={`page ${page === 0 ? 'shown' : ''}`}>
            <h2>Welcome.</h2>
            <button
              onClick={() => setPage(1)}
              className="button">
              Continue
            </button>
          </div>
          <div className={`page page-${page} ${page === 1 ? 'shown' : ''}`}>
            <div className={'text-center'}>
              <label htmlFor="key">License Key</label>
              <input
                id={"key"}
                type="text"
                className="input"
                disabled={loading}
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder={message}
              />
            </div>
            <div className={`buttons ${loading ? 'loading' : ''}`}>
              <button
                onClick={() => setPage(0)}
                disabled={loading}
                className="button">
                Back
              </button>
              <button
                onClick={handleLogin}
                disabled={loading}
                className="button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
