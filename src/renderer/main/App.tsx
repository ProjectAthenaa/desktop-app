import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import Global from './templates/global';
import {useDispatch} from 'react-redux';
import getTaskGroups from './store/tasks/reducers/get-task-groups';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // As soon as the component is mounted, fetch all
  // available information to initialize the app.
  useEffect(() => {
    dispatch(getTaskGroups());
  }, []);

  return (
    <HashRouter>
      <Global />
    </HashRouter>
  );
};

export default App;
