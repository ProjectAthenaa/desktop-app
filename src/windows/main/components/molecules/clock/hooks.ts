import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const ONE_SECOND = 1000;

const useClock = (): string => {
  const [time, setTime] = useState(DateTime.now().toMillis());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toMillis());
    }, ONE_SECOND);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dateTime = DateTime.fromMillis(time);

  return dateTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
};

export default useClock;
