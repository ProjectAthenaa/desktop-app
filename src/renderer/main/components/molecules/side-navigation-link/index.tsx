import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
  icon: JSX.Element;
  active?: boolean;
}

const SideNavigationLink: React.FC<Props> = ({ to, title, icon, active }) => {
  return (
    <Link to={to} className={`side-nav-link${active ? ' active' : ''}`}>
      {icon}
      <span>
        {title.split('\n').map((t, i) => (
          i !== 0
            ? <span key={t}><br />{t}</span>
            : t
        ))}
      </span>
    </Link>
  );
};

export default SideNavigationLink;
