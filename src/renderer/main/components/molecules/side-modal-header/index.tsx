import React from 'react';
import './styles.scss';

const SideModalHeader: React.FC = ({ children }) => {
  return (
    <header className={`side-modal-header`}>
      <h2>{ children }</h2>
    </header>
  );
};

export default SideModalHeader;
