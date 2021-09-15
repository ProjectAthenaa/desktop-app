import React from 'react';
import './styles.scss';

const SideModalFooter: React.FC = ({ children }) => {
  return (
    <header className={`side-modal-footer`}>
      <h2>{ children }</h2>
    </header>
  );
};

export default SideModalFooter;
