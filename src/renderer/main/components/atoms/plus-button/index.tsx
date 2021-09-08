import React from 'react';
import './styles.scss';

type Props = {
  secondary?: boolean;
  white?: boolean;
  onClick?: () => unknown;
}
const PlusButton: React.FC<Props> = ({ secondary, onClick, white }) => {
  return (
    <button
      onClick={onClick}
      className={`plus-button${secondary ? ' secondary' : ''}${white ? ' white' : ''}`}
    />
  );
};

export default PlusButton;
