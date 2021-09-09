import Profiles from './assets/images/icons/profiles';
import Proxies from './assets/images/icons/proxies';
import Dashboard from './assets/images/icons/dashboard';
import Tasks from './assets/images/icons/tasks';

export type Route = {
  title: string;
  route: string;
  icon: JSX.Element;
};

const routes: Route[] = [
  {
    title: 'Dashboard',
    route: '/',
    icon: Dashboard
  },
  {
    title: 'Tasks &\n Task Groups',
    route: '/tasks',
    icon: Tasks
  },
  {
    title: 'Profiles &\n Profile Groups',
    route: '/profiles',
    icon: Profiles
  },
  {
    title: 'Proxies',
    route: '/proxies',
    icon: Proxies
  },
  {
    title: 'Accounts',
    route: '/accounts',
    icon: Profiles
  }
];

export default routes;
