import React from 'react';
import './styles.scss';

type Props = {
  checked?: boolean;
  onClick?: () => unknown;
}
const Radio: React.FC<Props> = ({ children, checked, onClick }) => {

  return (
    <div className={`radio ${checked ? 'checked' : 'unchecked'}`} onClick={onClick}>
      <div className="control" />
      <span>{ children }</span>
    </div>
  );
};

export default Radio;
