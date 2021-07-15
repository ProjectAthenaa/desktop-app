import React from 'react';
import './styles.scss';
import routes from '../../../routes';
import { useLocation } from 'react-router-dom';
import Clock from '../../molecules/clock';
import NotificationPanel from '../../molecules/notification-panel';
import DefaultProfileImage from '../../../assets/images/profile.svg';
import Profile from '../../molecules/profile';
import Shadow from '../../../assets/images/overflow-shadow.png'
const Header: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname, routes)
  const title = routes.filter(
    route => pathname === route.route
  )[0].title;

  return (
    <div className={`header${title !== 'Dashboard' ? ' slim' : ''}`}>
    {/*<div className={`header slim`}>*/}
      <h1>{title}</h1>
      <img src={Shadow} />
      <div className="right">
        <Clock />
        <NotificationPanel />
        <Profile name={'bellu'} tag={'2520'} image={DefaultProfileImage} />
      </div>
    </div>
  );
};

export default Header;
