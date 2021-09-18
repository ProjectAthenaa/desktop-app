import React from 'react';
import './styles.scss';

const SideModalBody: React.FC = ({ children }) => {
  return (
    <header className={`side-modal-body`}>
      { children }
    </header>
  );
};

export default SideModalBody;
