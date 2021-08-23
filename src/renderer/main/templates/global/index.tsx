import React, {useEffect} from 'react';
import './styles.scss';
import SideNavigation from '../../components/organisms/side-navigation';
import Header from '../../components/organisms/header';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../../pages/tasks';
import Frame from '../../components/organisms/frame';
import ipcRenderer from '../../util/ipc-renderer';
import routes from '../../routes';

type Props = {
}

const Global: React.FC<Props> = () => {
  useEffect(() => {
    (async () => {
      const response = await ipcRenderer.invoke('ping');

      console.log(response);
    })();
  }, []);

  return (
    <div className={'global'}>
      <Frame />
      <div className="global-grid">
        <SideNavigation />
        <div>
          <Header />
          <Switch>
            <Route path={'/'}>
              <Tasks />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Global;
