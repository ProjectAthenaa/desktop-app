import React from 'react';
import './styles.scss';

type Props = {
  secondary?: boolean;
  white?: boolean;
  onClick?: () => unknown;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({ children, secondary, onClick, white, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button${secondary ? ' secondary' : ''}${white ? ' white' : ''}`}>
      { children }
    </button>
  );
};

export default Button;
