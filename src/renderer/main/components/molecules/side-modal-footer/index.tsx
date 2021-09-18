import React from 'react';
import './styles.scss';

const SideModalFooter: React.FC = ({ children }) => {
  return (
    <header className={`side-modal-footer`}>
      { children }
    </header>
  );
};

export default SideModalFooter;
