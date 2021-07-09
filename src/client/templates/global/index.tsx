import React from 'react';
import './styles.scss';
import SideNavigation from '../../components/organisms/side-navigation';
import Header from '../../components/organisms/header';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../../pages/tasks';
import Frame from '../../components/organisms/frame';

type Props = {
}

const Global: React.FC<Props> = () => {
  return (
    <div className={'global'}>
      <Frame />
      <div className="global-grid">
        <SideNavigation />
        <div>
          <Header />
          <Switch>
            <Route path={'/'}> {/* Change this to /tasks */}
              <Tasks/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Global;
