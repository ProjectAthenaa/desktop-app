import React, {useEffect, useState} from 'react';
import './styles.scss';
import SideNavigation from '../../components/organisms/side-navigation';
import Header from '../../components/organisms/header';
import {Route, Switch} from 'react-router-dom';
import Tasks from '../../pages/tasks';
import Frame from '../../components/organisms/frame';
import Profiles from '../../pages/profiles';
import Dashboard from '../../pages/dashboard';
import Proxies from '../../pages/proxies';
import Accounts from '../../pages/accounts';
import {useDispatch} from 'react-redux';
import ipcRenderer from '../../util/ipc-renderer';
import {updateScheduledTask} from '../../store/tasks';
import {TaskStatus} from '../../../../graphql/tasks/handlers/task-updates';
import {Status} from '../../../../types/task';
import {addNotification} from '../../store/notifications';
import { v4 as uuid } from 'uuid';
import {DateTime} from 'luxon';
import statusFormatter from '../../util/status-formatter';
import FullModal from '../../components/molecules/full-modal';
import Settings from '../../pages/settings';

const Global: React.FC = () => {
  const dispatch = useDispatch();
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);
  const scheduleTaskUpdated = (e: unknown, taskStatus: TaskStatus) => {
    dispatch(updateScheduledTask(taskStatus));

    if (
      taskStatus.Status === Status.CHECKED_OUT ||
      taskStatus.Status === Status.ERROR ||
      taskStatus.Status === Status.CHECKOUT_ERROR ||
      taskStatus.Status === Status.CHECKOUT_3DS_ERROR
    ) {
      dispatch(addNotification({
        ID: uuid(),
        Status: taskStatus.Status,
        Message: `${DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)} - ${statusFormatter(taskStatus.Status)}: ${taskStatus.Information.Message}`
      }))
    }
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
      <FullModal isOpen={settingsIsVisible} onCloseClick={() => setSettingsIsVisible(false)}>
        <Settings />
      </FullModal>
      <Frame openSettings={() => setSettingsIsVisible(true)} />
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
