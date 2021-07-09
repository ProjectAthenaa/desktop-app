import React from 'react';
import './styles.scss';
import LogoImage from '../../../assets/images/logo.svg';
import SideNavigationLink from '../../molecules/side-navigation-link';
import { useLocation } from 'react-router-dom';
import routes from '../../../routes';

const SideNavigation: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  return (
    <div className={'side-nav'}>
      <img src={LogoImage} alt="Project Athena" className="logo"/>
      <nav>
        {routes.map(route => (
          <SideNavigationLink
            key={route.route}
            to={route.route}
            title={route.title}
            icon={route.icon}
            active={path === route.route.split('/')[1]}
          />
        ))}
      </nav>
      <div />
    </div>
  );
};

export default SideNavigation;
