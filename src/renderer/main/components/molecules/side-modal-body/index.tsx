import React from 'react';
import './styles.scss';

const SideModalBody: React.FC = ({ children }) => {
  return (
    <header className={`side-modal-body`}>
      <h2>{ children }</h2>
    </header>
  );
};

export default SideModalBody;
