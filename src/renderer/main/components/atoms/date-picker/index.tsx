import React, {forwardRef, useState} from 'react';
import DP from 'react-datepicker';
import './styles.scss';
import {DateTime} from 'luxon';
import Input from '../input';

type Props = {
  onChange: (e: string) => void;
}

const DatePicker = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const DateF = () => {
    const [startDate, setStartDate] = useState(DateTime.now().toISO());

    const handleDateChange = (date: Date) => {
      const d = DateTime.fromJSDate(date);

      setStartDate(d.toISO());

      if (props.onChange) props.onChange(d.toISO());
    };
    return (
      <>
        <input type={'hidden'} ref={ref} value={startDate} />
        <DP
          showTimeInput
          selected={DateTime.fromISO(startDate).toJSDate()}
          onChange={handleDateChange}
        />
      </>
    )
  };

  return <DateF />;
});

export default DatePicker;
