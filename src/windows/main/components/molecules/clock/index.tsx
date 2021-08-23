import React from 'react';
import './styles.scss';
import useClock from './hooks';

const Clock: React.FC = () => {
  const time = useClock();

  return <p className={'clock'}>{time}</p>;
};

export default Clock;
