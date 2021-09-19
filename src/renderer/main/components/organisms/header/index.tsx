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
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const { pathname } = useLocation();

  const route = routes.filter(
    route => pathname === route.route
  )[0];
  const title = route ? route.title : '';

  return (
    <div className={`header${title !== 'Dashboard' ? ' slim' : ''}`}>
      <div className="left">
        <h1>
          {title}
          {/* Disabled for now <TextTransition text={title} inline springConfig={presets.stiff} />*/}
        </h1>
      </div>
      <div className="right">
        <Clock />
        <NotificationPanel />
        <Profile name={user.DiscordUsername} tag={user.DiscordDiscriminator} image={user.DiscordAvatar} />
      </div>
    </div>
  );
};

export default Header;
