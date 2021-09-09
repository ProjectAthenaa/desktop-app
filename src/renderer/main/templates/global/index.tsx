import React from 'react';
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

const Global: React.FC = () => {
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
