import React from 'react';
import './styles.scss';

type Props = {
  isOpen: boolean;
  onCloseClick: () => void;
}
const FullModal: React.FC<Props> = ({ isOpen, onCloseClick, children }) => {
  return (
    <div className={`full-modal ${isOpen ? 'shown' : ''}`}>
      <div className="modal-content">
        <button
          onClick={onCloseClick}
          className="close">
          &times;
        </button>
        { children }
      </div>
    </div>
  );
};

export default FullModal;
