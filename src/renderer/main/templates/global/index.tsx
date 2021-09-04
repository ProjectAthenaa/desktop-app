import React from 'react';
import './styles.scss';
import SideNavigation from '../../components/organisms/side-navigation';
import Header from '../../components/organisms/header';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../../pages/tasks';
import Frame from '../../components/organisms/frame';
import Profiles from '../../pages/profiles';
import Dashboard from '../../pages/dashboard';

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
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Global;
