import React, {useState} from 'react';
import DP from 'react-datepicker';
import './styles.scss';
import {DateTime} from 'luxon';

type Props = {
  onDateChange: (e: DateTime) => void;
}

const DatePicker: React.FC<Props> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    onDateChange(DateTime.fromJSDate(date));
  };

  return (
    <DP
      showTimeInput
      selected={startDate}
      onChange={handleDateChange}
    />
  );
}

export default DatePicker;
