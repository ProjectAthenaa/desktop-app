import React, {useRef} from 'react';
import './styles.scss';
import useOutsideAlerter from '../../../util/useOutsideAlerter';

type Props = {
  isOpen: boolean;
  onCloseClick: () => void;
}
const SideModal: React.FC<Props> = ({ isOpen, onCloseClick, children }) => {
  const modalContentRef = useRef();

  useOutsideAlerter(modalContentRef, onCloseClick);

  return (
    <div className={`side-modal ${isOpen ? 'shown' : ''}`}>
      <div className="modal-content" ref={modalContentRef}>
        <button
          onClick={onCloseClick}
          className="close">
          &times;
        </button>
        <div className="scrollable-region">
          { children }
        </div>
      </div>
    </div>
  );
};

export default SideModal;
