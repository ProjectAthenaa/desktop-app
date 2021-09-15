import React, {useEffect} from 'react';
import './styles.scss';
import SideNavigation from '../../components/organisms/side-navigation';
import Header from '../../components/organisms/header';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../../pages/tasks';
import Frame from '../../components/organisms/frame';
import Profiles from '../../pages/profiles';
import Dashboard from '../../pages/dashboard';
import Proxies from '../../pages/proxies';
import Accounts from '../../pages/accounts';
import {useDispatch} from 'react-redux';
import ipcRenderer from '../../util/ipc-renderer';
import {updateScheduledTask, updateScheduledTasks} from '../../store/tasks';
import {ScheduledTask} from '../../../../graphql/tasks/handlers/get-scheduled-tasks';
import {TaskStatus} from '../../../../graphql/tasks/handlers/task-updates';

const Global: React.FC = () => {
  const dispatch = useDispatch();

  const scheduleTaskUpdated = (e: unknown, taskStatus: TaskStatus) => {
    console.log(e, taskStatus)
    dispatch(updateScheduledTask(taskStatus));
  };

  // const scheduleTasksUpdated = (e: unknown, tasks: ScheduledTask[]) => {
  //   console.log(e, tasks)
  //   dispatch(updateScheduledTasks(tasks));
  // };

  useEffect(() => {
    // ipcRenderer.on('scheduled-tasks-updated', scheduleTasksUpdated);
    ipcRenderer.on('scheduled-task-updated', scheduleTaskUpdated);

    return () => {
      // ipcRenderer.removeListener('scheduled-tasks-updated', scheduleTasksUpdated);
      ipcRenderer.removeListener('scheduled-task-updated', scheduleTaskUpdated);
    }
  }, []);

  return (
    <div className={'global'}>
      <Frame />
      <div className="global-grid">
        <SideNavigation />
        <div>
          <Header />
          <Switch>
            <Route path={'/'} exact>
              <Dashboard />
            </Route>
            <Route path={'/tasks'}>
              <Tasks />
            </Route>
            <Route path={'/profiles'}>
              <Profiles />
            </Route>
            <Route path={'/proxies'}>
              <Proxies />
            </Route>
            <Route path={'/accounts'}>
              <Accounts />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Global;
