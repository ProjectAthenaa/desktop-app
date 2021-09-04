import React from 'react';
import './styles.scss';

type Props = {
  secondary?: boolean;
  white?: boolean;
  onClick?: () => unknown;
}
const Button: React.FC<Props> = ({ children, secondary, onClick, white }) => {
  return (
    <button
      onClick={onClick}
      className={`button${secondary ? ' secondary' : ''}${white ? ' white' : ''}`}>
      { children }
    </button>
  );
};

export default Button;
