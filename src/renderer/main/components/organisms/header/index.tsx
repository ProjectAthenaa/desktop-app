import React from 'react';
import './styles.scss';
import routes from '../../../routes';
import { useLocation } from 'react-router-dom';
import Clock from '../../molecules/clock';
import NotificationPanel from '../../molecules/notification-panel';
import DefaultProfileImage from '../../../assets/images/profile.svg';
import Profile from '../../molecules/profile';
import Shadow from '../../../assets/images/overflow-shadow.png'
import TextTransition, { presets } from 'react-text-transition';
const Header: React.FC = () => {
  const { pathname } = useLocation();

  const route = routes.filter(
    route => pathname === route.route
  )[0];
  const title = route ? route.title : '';

  return (
    <div className={`header${title !== 'Dashboard' ? ' slim' : ''}`}>
      <h1>
        <TextTransition text={title} inline springConfig={presets.stiff}/>
      </h1>
      <div className="right">
        <Clock />
        <NotificationPanel />
        <Profile name={'bellu'} tag={'2520'} image={DefaultProfileImage} />
      </div>
    </div>
  );
};

export default Header;
