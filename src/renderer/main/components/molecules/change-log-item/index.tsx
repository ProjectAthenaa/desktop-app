import React from 'react';
import './styles.scss';
import {DateTime} from 'luxon';
import statusFormatter from '../../../util/status-formatter';
import {Status} from '../../../../../types/task';

type Props = {
  title: string;
  timestamp: string;
  tag: string;
}

const ChangeLogItem: React.FC<Props> = ({ title, timestamp, tag }) => {
  return (
    <div className={'change-log-item'}>
      <div className={'lead'}>
        <h3>{ title }</h3>
        <p>{ DateTime.fromISO(timestamp).toLocaleString(DateTime.DATETIME_SHORT) }</p>
      </div>
      <span className={`tag ${ tag ? tag : '' }`}>{ statusFormatter(tag as Status) }</span>
    </div>
  );
};

export default ChangeLogItem;
