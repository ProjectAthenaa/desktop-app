import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import Global from './templates/global';
import {useDispatch} from 'react-redux';
import {getTaskGroupsRequest} from './store/tasks/reducers/get-task-groups';
import { ToastContainer } from 'react-toastify';
import {getProfileGroupsRequest} from './store/profiles/reducers/get-profile-groups';
import {getAccountGroupsRequest} from './store/accounts/reducers/get-account-groups';
import {getProxyListsRequest} from './store/proxies/reducers/get-proxy-lists';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // As soon as the component is mounted, fetch all
  // available information to initialize the app.
  useEffect(() => {
    dispatch(getTaskGroupsRequest());
    dispatch(getProfileGroupsRequest());
    dispatch(getAccountGroupsRequest());
    dispatch(getProxyListsRequest());
  }, []);

  return (
    <HashRouter>
      <Global />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </HashRouter>
  );
};

export default App;
